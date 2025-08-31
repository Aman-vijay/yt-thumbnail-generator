

import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";
import { geminiImage } from "@/lib/google-gemini";

const imagekit = new ImageKit({
	publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
	privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
	urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
});

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { imageUrl, prompt } = body;
		if (!imageUrl || !prompt) {
			return NextResponse.json({ success: false, message: "imageUrl and prompt are required" }, { status: 400 });
		}

		// Call Gemini with the ImageKit URL
		let geminiText = undefined;
		let geminiImageBase64 = undefined;
		const geminiResult = await geminiImage({
			prompt,
			imagePathOrUrl: imageUrl
		});

		// If geminiResult is text, return it. If it's an image, upload to ImageKit
		if (typeof geminiResult === "string") {
			geminiText = geminiResult;
		}

		// If geminiImage returns an image, it should expose the base64 or buffer
		// For this, you may need to update geminiImage to return { text, imageBase64 }
		// Here, let's assume geminiImage returns an object if image is present
		if (geminiResult && geminiResult.imageBase64) {
			geminiImageBase64 = geminiResult.imageBase64;
			// Upload Gemini image to ImageKit
			const uploadGemini = await imagekit.upload({
				file: Buffer.from(geminiImageBase64, "base64"),
				fileName: `gemini-${Date.now()}.png`,
				useUniqueFileName: true,
				folder: "/gemini-results",
			});
			return NextResponse.json({
				success: true,
				geminiText,
				geminiImageUrl: uploadGemini.url
			});
		}

		return NextResponse.json({
			success: true,
			geminiText
		});
	} catch (error) {
		console.error("Gemini API error:", error);
		return NextResponse.json(
			{ success: false, message: "Gemini API failed" },
			{ status: 500 }
		);
	}
}
