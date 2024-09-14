// src/routes/api/images/+server.js
import { json } from "@sveltejs/kit";

import { PRIVATE_IMAGEKIT_TOKEN } from "$env/static/private";

export async function GET() {
  const imagekitUrl = "https://api.imagekit.io/v1/files"; // ImageKit's API endpoint for listing files
  const folderPath = "/pictures"; // Folder path in ImageKit
  const privateKey = PRIVATE_IMAGEKIT_TOKEN;

  // Fetch the list of images from the ImageKit API
  const response = await fetch(
    `${imagekitUrl}?path=${encodeURIComponent(folderPath)}&q=30`,
    {
      headers: {
        Authorization: "Basic " + btoa(`${privateKey}:`),
        "Content-Type": "application/json",
      },
    },
  );

  // Check for errors in the response
  if (!response.ok) {
    return json(
      { error: "Failed to fetch images from ImageKit" },
      { status: response.status },
    );
  }

  const data = await response.json();

  return json(data);
}
