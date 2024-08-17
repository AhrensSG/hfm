import { NextResponse } from 'next/server';
import createProperty from './controller/createPropertyController';
import { deleteProperty } from './controller/deletePropertyController';
import { getAllProperties, getPropertyById } from './controller/getPropertyController';
import { updateProperty } from './controller/updateProperty';

// Manejar solicitud POST
export async function POST(req) {
    const data = await req.json();
    const result = await createProperty(data);

    return result
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const data = {
        id: searchParams.get('id'),
        price: searchParams.get('price'),
    }

    if (data) {
        const result = await getPropertyById(data);
        return result
    }
    const result = await getAllProperties();
    return result
}

export async function PUT(req) {
    const data = await req.json();
    const { id, property } = data;

    const result = await updateProperty(id, property);
    return result
}

export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const result = await deleteProperty(id);
    return result
}
