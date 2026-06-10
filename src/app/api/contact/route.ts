export const runtime = "edge";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("=== Nuevo contacto recibido ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("================================");

    return NextResponse.json({ ok: true, message: "Mensaje recibido correctamente" });
  } catch (error) {
    console.error("Error al procesar el contacto:", error);
    return NextResponse.json(
      { ok: false, message: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}