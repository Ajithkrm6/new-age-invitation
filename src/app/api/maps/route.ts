import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = process.env.GMAP_API_KEY;
  const latitude = req.nextUrl.searchParams.get("latitude");
  const longitude = req.nextUrl.searchParams.get("longitude");

  if (!apiKey || !latitude || !longitude) {
    return new Response("Missing API key or coordinates", { status: 400 });
  }

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}`;
  return new Response(JSON.stringify({ mapUrl }), { status: 200 });
}
