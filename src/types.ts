import { ImgHTMLAttributes } from "react";

/** Available logo size presets */
export type LogoSize = "icon" | "sm" | "md" | "lg";

/** All supported brand name slugs */
export type BrandName =
  | "abarth"
  | "acura"
  | "alfa-romeo"
  | "alpine"
  | "alpina"
  | "apollo"
  | "arash"
  | "aston-martin"
  | "audi"
  | "bentley"
  | "bmw"
  | "brabus"
  | "bristol"
  | "bugatti"
  | "buick"
  | "cadillac"
  | "caterham"
  | "chevrolet"
  | "chrysler"
  | "citroen"
  | "cupra"
  | "dacia"
  | "dallara"
  | "de-tomaso"
  | "dodge"
  | "drako"
  | "ferrari"
  | "fiat"
  | "fisker"
  | "ford"
  | "genesis"
  | "ginetta"
  | "gumpert"
  | "hamann"
  | "hennessey"
  | "hispano-suiza"
  | "honda"
  | "hyundai"
  | "infiniti"
  | "jaguar"
  | "jeep"
  | "karma"
  | "kia"
  | "koenigsegg"
  | "ktm"
  | "lamborghini"
  | "lancia"
  | "land-rover"
  | "lexus"
  | "lincoln"
  | "lotus"
  | "lucid"
  | "mansory"
  | "maserati"
  | "maybach"
  | "mazda"
  | "mclaren"
  | "mercedes-amg"
  | "mini"
  | "mitsubishi"
  | "morgan"
  | "mosler"
  | "nio"
  | "nissan"
  | "noble"
  | "opel"
  | "pagani"
  | "panoz"
  | "peugeot"
  | "pininfarina"
  | "polestar"
  | "porsche"
  | "radical"
  | "renault"
  | "rezvani"
  | "rimac"
  | "rivian"
  | "rolls-royce"
  | "ruf"
  | "saab"
  | "saleen"
  | "seat"
  | "shelby"
  | "singer"
  | "skoda"
  | "spyker"
  | "ssc"
  | "subaru"
  | "techart"
  | "tesla"
  | "toyota"
  | "tvr"
  | "ultima"
  | "vector"
  | "venturi"
  | "volkswagen"
  | "volvo"
  | "w-motors"
  | "wiesmann"
  | "zenvo";

/**
 * Pixel dimensions for each size tier.
 */
export const SIZE_MAP: Record<LogoSize, number> = {
  icon: 32, // Inline icons, favicons, small UI elements
  sm: 80, // Thumbnails, nav icons, table cells
  md: 160, // Cards, lists, sidebars (default)
  lg: 320, // Hero sections, detail views
};

/**
 * Props accepted by the ReactCarLogo component.
 * Extends standard <img> HTML attributes (minus src/width/height which are controlled).
 */
export interface ReactCarLogoProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  /**
   * Brand name slug. e.g. "ferrari", "alfa-romeo", "rolls-royce"
   */
  name: BrandName;

  /**
   * Size preset. Controls the rendered dimension.
   * - `'icon'` -> renders at 32px
   * - `'sm'`   -> renders at 80px
   * - `'md'`   -> renders at 160px -- DEFAULT
   * - `'lg'`   -> renders at 320px
   */
  size?: LogoSize;

  /**
   * Custom pixel width. Overrides `size` if provided.
   */
  width?: number;

  /**
   * Custom pixel height. Overrides `size` if provided.
   */
  height?: number;

  /**
   * Accessible alt text for screen readers.
   * Defaults to the brand's display name (e.g., "Ferrari").
   */
  alt?: string;

  /**
   * Native browser image loading strategy.
   * Defaults to 'lazy' for performance.
   */
  loading?: "lazy" | "eager";
}

/**
 * Metadata object for each brand.
 * Useful for building dynamic UIs, lists, and filters.
 */
export interface CarLogoMeta {
  /** Brand display name, e.g. "Rolls-Royce" */
  title: string;

  /** URL-safe slug, e.g. "rolls-royce" */
  slug: string;

  /** Country of origin, e.g. "Italy" */
  country: string;

  /** Regional grouping: "Italian" | "German" | "British" | "French" | "American" | "Swedish" | "Other" */
  region: string;

  /** Year the brand was founded */
  founded: number;

  /** Primary brand hex color (without #), e.g. "CD212A" */
  hex: string;

  /** Link to the brand's official guidelines page (if known) */
  guidelines?: string;
}
