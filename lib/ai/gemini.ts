
import { GoogleGenAI, Modality } from "@google/genai";
import * as fs from "node:fs";


export async function geminiImage({ prompt, imagePathOrUrl }: { prompt: string; imagePathOrUrl: string }) {
  const ai = new GoogleGenAI({});

  let imageData;
  if (/^https?:\/\//.test(imagePathOrUrl)) {
    // Fetch image from URL
    const res = await fetch(imagePathOrUrl);
    if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);
    imageData = Buffer.from(await res.arrayBuffer());
  } else {
    // Read image from local file
    imageData = fs.readFileSync(imagePathOrUrl);
  }
  const base64Image = imageData.toString("base64");

  const geminiPrompt = [
    { text: prompt },
    {
      inlineData: {
        mimeType: "image/png",
        data: base64Image,
      },
    },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: geminiPrompt,
  });

  let text;
  let imageBase64;
  const parts = response.candidates?.[0]?.content?.parts;
  if (parts) {
    for (const part of parts) {
      if (part.text) {
        text = part.text;
      } else if (part.inlineData) {
        imageBase64 = part.inlineData.data;
      }
    }
  }
  return { text, imageBase64 };
}

