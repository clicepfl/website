import { directus } from "@/directus";
import { readAssetArrayBuffer, readFile } from "@directus/sdk";
import { Resvg } from "@resvg/resvg-js";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log(req.url);

  let id = req.query["id"];
  if (typeof id !== "string") {
    return new Response("Missing id parameter", { status: 400 });
  }

  const d = directus();
  const data = await d.request(readFile(id, { fields: ["type"] }));

  console.info(data);

  if (data.type == "image/svg+xml") {
    const file = await d.request(readAssetArrayBuffer(id));
    const svg = new TextDecoder("utf-8").decode(file);

    const resvg = new Resvg(svg, {
      background: "rgba(238, 235, 230, .9)",
      fitTo: {
        mode: "width",
        value: 1300,
      },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    // TODO: maybe cache it in a file to avoid re-rendering? May be not that useful since OG values are usually cached by the client application servers.

    res.status(200).setHeader("content-type", "image/png").send(pngBuffer);
  } else {
    const image = await d.request(
      readAssetArrayBuffer(id, {
        fit: "contain",
        width: 1300,
        height: 630,
        format: "jpg",
      })
    );

    res.send(Buffer.from(image));
  }
}
