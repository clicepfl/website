import { PUBLIC_DIRECTUS_URL } from "@/directus";
import { components } from "@/types/schema";
import Image, { ImageLoader } from "next/image";

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${PUBLIC_DIRECTUS_URL}/assets/${src}?width=${width}`;
};

/**
 * Display an Image fetched from the Directus instance
 * @param img unique public identifier of the image .
 */
export default function DirectusImage({
  img,
  name,
  className,
  cover,
  sizes,
}: {
  img?: string | components["schemas"]["Files"] | null;
  name?: string | null;
  className?: string;
  cover?: boolean;
  sizes: string;
}) {
  if (img) {
    return (
      <div className={className} style={{ position: "relative" }}>
        <Image
          loader={imageLoader}
          src={typeof img === "string" ? img : img.filename_disk || ""}
          fill
          style={{ objectFit: cover ? "cover" : "contain" }}
          alt={name || "image"}
          sizes={sizes}
          loading="eager"
        />
      </div>
    );
  } else {
    return <p>{name}</p>;
  }
}
