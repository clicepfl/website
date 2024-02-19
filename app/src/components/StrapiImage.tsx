import Image from "next/image";
import SVG from "react-inlinesvg";

/**
 * Display an Image fetched from the Strapi instance
 * @param img object returned by Strapi when querying the image.
 * @param size the prepared size of the image (one of "thumbnail", "small", "medium", "large", "origin"). This parameter is ignored for SVGs
 */
export default function StrapiImage({
  img,
  size,
  className,
}: {
  img: any;
  size: "thumbnail" | "small" | "medium" | "large" | "origin";
  className?: string;
}) {
  let image = img.data.attributes;

  if (image.ext !== ".svg") {
    let selectedFormat =
      size === "origin" || !(size in image.formats)
        ? image
        : image.formats[size];

    return (
      <>
        <Image
          alt={selectedFormat.name}
          src={selectedFormat.url}
          width={selectedFormat.width}
          height={selectedFormat.height}
          loader={(p) => `${CLIENT_STRAPI_URL}${p.src}`}
          className={className}
        />
      </>
    );
  } else {
    return (
      <SVG src={`${CLIENT_STRAPI_URL}${image.url}`} className={className} />
    );
  }
}
