import SVG from "react-inlinesvg";

/**
 * Display an Image fetched from the Directus instance
 * @param img object returned by Strapi when querying the image.
 * @param size the prepared size of the image (one of "thumbnail", "small", "medium", "large", "origin"). This parameter is ignored for SVGs
 */
export default function DirectusImage({
  img,
  className,
}: {
  img: any;
  className?: string;
}) {
  console.log(img);
  return (
    <SVG
      src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${img}`}
      className={className}
    />
  );
}
