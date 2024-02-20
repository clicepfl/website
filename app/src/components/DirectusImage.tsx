import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${src}?width=${width}`;
};

/**
 * Display an Image fetched from the Directus instance
 * @param img object returned by Strapi when querying the image.
 */
export default function DirectusImage({
  img,
  className,
}: {
  img: any;
  className?: string;
}) {
  return img ? (
    <Image
      loader={imageLoader}
      src={img}
      width={500}
      height={500}
      alt="image"
      className={className}
    />
  ) : (
    <p>ERROR</p>
  );
}
