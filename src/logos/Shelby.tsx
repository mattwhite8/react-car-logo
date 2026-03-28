import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Shelby",
  slug: "shelby",
  pngUrl: "https://www.carlogos.org/logo/Shelby-logo.png",
  source: "https://www.carlogos.org/car-brands/shelby-logo.html",
  country: "USA",
  region: "American",
  founded: 1962,
  hex: "8B0000",
};

export const Shelby: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Shelby",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Shelby-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default Shelby;
