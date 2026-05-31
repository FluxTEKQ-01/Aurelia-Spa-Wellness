import Image from "next/image";

export function ImageBackdrop({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${className}`}
    />
  );
}
