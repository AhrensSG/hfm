import { Document } from "@/db/init";
import { NextResponse } from "next/server";

export async function createDocument(data) {
    if (!data) {
        return NextResponse.json({ message: "No data provided" }, { status: 400 })
    }
    if (!data.userId || data.userId.trim() === "") {
        return NextResponse.json({ message: "No user id provided" }, { status: 400 })
    }
    if (!data.type || data.type.trim() === "" || (data.type !== "CONTRACT" && data.type !== "SIGNATURE" && data.type !== "DNI" && data.type !== "ROSTER" && data.type !== "PASSPORT")) {
        return NextResponse.json({ message: "No document type provided or invalid" }, { status: 400 })
    }
    if (!data.url || data.url.trim() === "") {
        return NextResponse.json({ message: "No document url provided" }, { status: 400 })
    }
    if (!data.typeUser || data.typeUser.trim() === "" || (data.typeUser !== "CLIENT" && data.tipeUser !== "ADMIN")) {
        return NextResponse.json({ message: "No user type provided or invalid" }, { status: 400 })
    }

    try {
        const document = Document.create({
            type: data.type,
            url: data.url,
            documentableId: data.userId,
            documentableType: data.typeUser
        })
        if (document) {
            return NextResponse.json({ message: "Document created successfully" }, { status: 200 })
        }
        return NextResponse.json({ message: "Document not created" }, { status: 400 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Document not created" }, { status: 400 })
    }
}