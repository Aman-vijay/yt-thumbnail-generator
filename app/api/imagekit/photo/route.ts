import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
});

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        
        // Convert File to Buffer
        const buffer = Buffer.from(await file.arrayBuffer());
        
        // Upload file using ImageKit SDK
        const response = await imagekit.upload({
            file: buffer,
            fileName: file.name,
            useUniqueFileName: true,
            folder: "/thumbnails", 
        });
        
        return NextResponse.json({
            success: true,
            data: response
        });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json(
            { success: false, message: "Upload failed" },
            { status: 500 }
        );
    }
}


export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const fileId = searchParams.get("id");

        if (!fileId) {
            return NextResponse.json(
                { success: false, message: "File ID is required" },
                { status: 400 }
            );
        }

        // Fetch file information from ImageKit
        const response = await imagekit.getFileDetails(fileId);

        return NextResponse.json({
            success: true,
            data: response
        });
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json(
            { success: false, message: "Fetch failed" },
            { status: 500 }
        );
    }
}