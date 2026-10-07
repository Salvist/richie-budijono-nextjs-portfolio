import Image from "next/image";

export default function NextImage({
  src,
  alt,
  width = 200,
  height = 200,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="200px"
      style={{ width: 200, maxWidth: "100%", height: "auto" }}
    />
  );
}
