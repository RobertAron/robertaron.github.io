import type React from "react";

export const ImageContainer = ({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) => (
  <figure className="mb-4 flex flex-col items-center gap-1">
    <img src={src} alt={caption} />
    <figcaption>{caption}</figcaption>
  </figure>
);
