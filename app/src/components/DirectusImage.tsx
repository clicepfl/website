import { components } from "@/types/schema";
import Image, { ImageLoader } from "next/image";

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${src}?width=${width}`;
};

/**
 * Display an Image fetched from the Directus instance
 * @param img unique public identifier of the image .
 */
export default function DirectusImage({
  img,
  name,
  className,
}: {
  img?: string | components["schemas"]["Files"] | null;
  name?: string;
  className?: string;
}) {
  if (img) {
    return (
      <div className={className} style={{ position: "relative" }}>
        <Image
          loader={imageLoader}
          src={typeof img === "string" ? img : img.filename_disk || ""}
          fill
          style={{ objectFit: "contain" }}
          alt={name || "image"}
        />
      </div>
    );
  } else {
    return <p>ERROR</p>;
  }
}
