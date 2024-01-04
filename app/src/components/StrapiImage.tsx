import { CLIENT_STRAPI_URL } from "@/strapi";
import Image from "next/image";

/**
 * Display an Image fetched from the Strapi instance
 * @param img object returned by Strapi when querying the image.
 * @param size the prepared size of the image (one of "thumbnail", "small", "medium", "large", "origin")
 */
export default function StrapiImage({
  img,
  size,
}: {
  img: any;
  size: "thumbnail" | "small" | "medium" | "large" | "origin";
}) {
  let selectedFormat =
    size === "origin" ? img.data.attributes : img.data.attributes.formats[size];
  return (
    <>
      <Image
        alt={selectedFormat.name}
        src={selectedFormat.url}
        width={selectedFormat.width}
        height={selectedFormat.height}
        loader={(p) => `${CLIENT_STRAPI_URL}${p.src}`}
      />
    </>
  );
}
