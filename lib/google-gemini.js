import { GoogleGenAI, Modality } from "@google/genai";
import * as fs from "node:fs";
console.log(process.env.GOOGLE_API_KEY);
const GOOGLE_API_KEY="AIzaSyDo5G5kzfRwhC8W5lxFKZ4oL8W7l21YnRg"

// GOOGLE_API_KEY=""

async function main() {

  const ai = new GoogleGenAI({
    apiKey: GOOGLE_API_KEY
  });

  const prompt =
    "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme";

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: prompt,
  });
  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync("gemini-native-image.png", buffer);
      console.log("Image saved as gemini-native-image.png");
    }
  }
}

main();