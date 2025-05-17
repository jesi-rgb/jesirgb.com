// src/routes/api/images/+server.js
import { json } from "@sveltejs/kit";

import {
	PRIVATE_IMAGEKIT_TOKEN,
	PRIVATE_RASTER_TOKEN,
} from "$env/static/private";

export async function GET() {
	const rasterBaseUrl = "https://api.raster.app/"; // ImageKit's API endpoint for listing files
	const organization = "cjqf86hyzds4iv";
	const folderPath = "website"; // Folder path in ImageKit
	const privateKey = PRIVATE_RASTER_TOKEN;

	// Fetch the list of images from the ImageKit API
	const response = await fetch(rasterBaseUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${privateKey}`,
		},
		body: JSON.stringify({
			query: `query {assets(organizationId: "${organization}", libraryId: "${folderPath}") { id name type url tags } }`,
		}),
	});

	// Check for errors in the response
	if (!response.ok) {
		const error = json(
			{ error: "Failed to fetch images from Raster" },
			{ status: response.status },
		);

		console.log(error);
		return error;
	}

	const data = await response.json();

	const images = await data.data.assets;

	return json(images);
}
