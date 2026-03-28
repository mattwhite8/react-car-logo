import React from "react";
import type { CarLogoProps, CarLogoMeta } from "../types";
import { SIZE_MAP } from "../types";

export const meta: CarLogoMeta = {
  title: "Rolls-Royce",
  slug: "rolls-royce",
  pngUrl: "https://www.carlogos.org/logo/Rolls-Royce-logo.png",
  source: "https://www.carlogos.org/car-brands/rolls-royce-logo.html",
  country: "UK",
  region: "British",
  founded: 1904,
  hex: "1A1A1A",
};

export const RollsRoyce: React.FC<CarLogoProps> = ({
  size = "md",
  width,
  height,
  alt = "Rolls-Royce",
  loading = "lazy",
  style,
  ...props
}) => {
  const renderPx = width ?? height ?? SIZE_MAP[size];

  return (
    <img
      src="https://www.carlogos.org/logo/Rolls-Royce-logo.png"
      alt={alt}
      width={renderPx}
      height={renderPx}
      loading={loading}
      style={{ objectFit: "contain", ...style }}
      {...props}
    />
  );
};

export default RollsRoyce;
