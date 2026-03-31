import { writeFileSync } from "fs";
import { join } from "path";

interface Brand {
  title: string;
  slug: string;
  hex: string;
  region: string;
  country: string;
  founded: number;
}

const BRANDS: Brand[] = [
  // Italian
  { title: "Abarth", slug: "abarth", hex: "CC0000", region: "Italian", country: "Italy", founded: 1949 },
  { title: "Alfa Romeo", slug: "alfa-romeo", hex: "CC0000", region: "Italian", country: "Italy", founded: 1910 },
  { title: "Dallara", slug: "dallara", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1972 },
  { title: "De Tomaso", slug: "de-tomaso", hex: "003087", region: "Italian", country: "Italy", founded: 1959 },
  { title: "Ferrari", slug: "ferrari", hex: "CD212A", region: "Italian", country: "Italy", founded: 1939 },
  { title: "Fiat", slug: "fiat", hex: "CC0000", region: "Italian", country: "Italy", founded: 1899 },
  { title: "Lamborghini", slug: "lamborghini", hex: "D4AF37", region: "Italian", country: "Italy", founded: 1963 },
  { title: "Lancia", slug: "lancia", hex: "003087", region: "Italian", country: "Italy", founded: 1906 },
  { title: "Maserati", slug: "maserati", hex: "003087", region: "Italian", country: "Italy", founded: 1914 },
  { title: "Pagani", slug: "pagani", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1992 },
  { title: "Pininfarina", slug: "pininfarina", hex: "1A1A1A", region: "Italian", country: "Italy", founded: 1930 },
  // German
  { title: "Alpina", slug: "alpina", hex: "003087", region: "German", country: "Germany", founded: 1965 },
  { title: "Apollo", slug: "apollo", hex: "1A1A1A", region: "German", country: "Germany", founded: 2004 },
  { title: "Audi", slug: "audi", hex: "1A1A1A", region: "German", country: "Germany", founded: 1909 },
  { title: "BMW", slug: "bmw", hex: "0066B2", region: "German", country: "Germany", founded: 1916 },
  { title: "Brabus", slug: "brabus", hex: "1A1A1A", region: "German", country: "Germany", founded: 1977 },
  { title: "Gumpert", slug: "gumpert", hex: "1A1A1A", region: "German", country: "Germany", founded: 2004 },
  { title: "Hamann", slug: "hamann", hex: "1A1A1A", region: "German", country: "Germany", founded: 1986 },
  { title: "Mansory", slug: "mansory", hex: "D4AF37", region: "German", country: "Germany", founded: 1989 },
  { title: "Maybach", slug: "maybach", hex: "1A1A1A", region: "German", country: "Germany", founded: 1909 },
  { title: "Mercedes-AMG", slug: "mercedes-amg", hex: "1A1A1A", region: "German", country: "Germany", founded: 1967 },
  { title: "Opel", slug: "opel", hex: "FFCC00", region: "German", country: "Germany", founded: 1862 },
  { title: "Porsche", slug: "porsche", hex: "1A1A1A", region: "German", country: "Germany", founded: 1931 },
  { title: "RUF", slug: "ruf", hex: "1A1A1A", region: "German", country: "Germany", founded: 1939 },
  { title: "TechArt", slug: "techart", hex: "1A1A1A", region: "German", country: "Germany", founded: 1987 },
  { title: "Volkswagen", slug: "volkswagen", hex: "003087", region: "German", country: "Germany", founded: 1937 },
  { title: "Wiesmann", slug: "wiesmann", hex: "1A1A1A", region: "German", country: "Germany", founded: 1985 },
  // British
  { title: "Arash", slug: "arash", hex: "1A1A1A", region: "British", country: "UK", founded: 1999 },
  { title: "Aston Martin", slug: "aston-martin", hex: "004225", region: "British", country: "UK", founded: 1913 },
  { title: "Bentley", slug: "bentley", hex: "1A5276", region: "British", country: "UK", founded: 1919 },
  { title: "Bristol", slug: "bristol", hex: "1A1A1A", region: "British", country: "UK", founded: 1945 },
  { title: "Caterham", slug: "caterham", hex: "CC0000", region: "British", country: "UK", founded: 1973 },
  { title: "Ginetta", slug: "ginetta", hex: "CC0000", region: "British", country: "UK", founded: 1958 },
  { title: "Jaguar", slug: "jaguar", hex: "003F7C", region: "British", country: "UK", founded: 1935 },
  { title: "Land Rover", slug: "land-rover", hex: "004A2F", region: "British", country: "UK", founded: 1948 },
  { title: "Lotus", slug: "lotus", hex: "005C3E", region: "British", country: "UK", founded: 1948 },
  { title: "McLaren", slug: "mclaren", hex: "FF8000", region: "British", country: "UK", founded: 1963 },
  { title: "MINI", slug: "mini", hex: "1A1A1A", region: "British", country: "UK", founded: 2001 },
  { title: "Morgan", slug: "morgan", hex: "1A1A1A", region: "British", country: "UK", founded: 1909 },
  { title: "Noble", slug: "noble", hex: "CC0000", region: "British", country: "UK", founded: 1999 },
  { title: "Radical", slug: "radical", hex: "CC0000", region: "British", country: "UK", founded: 1997 },
  { title: "Rolls-Royce", slug: "rolls-royce", hex: "1A1A1A", region: "British", country: "UK", founded: 1904 },
  { title: "Singer", slug: "singer", hex: "1A1A1A", region: "British", country: "UK", founded: 2009 },
  { title: "TVR", slug: "tvr", hex: "8B0000", region: "British", country: "UK", founded: 1947 },
  { title: "Ultima", slug: "ultima", hex: "1A1A1A", region: "British", country: "UK", founded: 1992 },
  // French
  { title: "Alpine", slug: "alpine", hex: "003087", region: "French", country: "France", founded: 1955 },
  { title: "Bugatti", slug: "bugatti", hex: "1B1F8A", region: "French", country: "France", founded: 1909 },
  { title: "Citroën", slug: "citroen", hex: "CC0000", region: "French", country: "France", founded: 1919 },
  { title: "Peugeot", slug: "peugeot", hex: "1A1A1A", region: "French", country: "France", founded: 1882 },
  { title: "Renault", slug: "renault", hex: "FFCC00", region: "French", country: "France", founded: 1899 },
  { title: "Venturi", slug: "venturi", hex: "1A1A1A", region: "French", country: "France", founded: 1984 },
  // American
  { title: "Buick", slug: "buick", hex: "1A1A1A", region: "American", country: "USA", founded: 1903 },
  { title: "Cadillac", slug: "cadillac", hex: "1A1A1A", region: "American", country: "USA", founded: 1902 },
  { title: "Chevrolet", slug: "chevrolet", hex: "CC0000", region: "American", country: "USA", founded: 1911 },
  { title: "Chrysler", slug: "chrysler", hex: "003087", region: "American", country: "USA", founded: 1925 },
  { title: "Dodge", slug: "dodge", hex: "CC0000", region: "American", country: "USA", founded: 1900 },
  { title: "Drako", slug: "drako", hex: "1A1A1A", region: "American", country: "USA", founded: 2013 },
  { title: "Fisker", slug: "fisker", hex: "1A1A1A", region: "American", country: "USA", founded: 2007 },
  { title: "Ford", slug: "ford", hex: "003087", region: "American", country: "USA", founded: 1903 },
  { title: "Hennessey", slug: "hennessey", hex: "1A1A1A", region: "American", country: "USA", founded: 1991 },
  { title: "Jeep", slug: "jeep", hex: "1A1A1A", region: "American", country: "USA", founded: 1941 },
  { title: "Karma", slug: "karma", hex: "1A1A1A", region: "American", country: "USA", founded: 2014 },
  { title: "Lincoln", slug: "lincoln", hex: "1A1A1A", region: "American", country: "USA", founded: 1917 },
  { title: "Lucid", slug: "lucid", hex: "1A1A1A", region: "American", country: "USA", founded: 2007 },
  { title: "Mosler", slug: "mosler", hex: "003087", region: "American", country: "USA", founded: 1985 },
  { title: "Panoz", slug: "panoz", hex: "003087", region: "American", country: "USA", founded: 1989 },
  { title: "Rezvani", slug: "rezvani", hex: "1A1A1A", region: "American", country: "USA", founded: 2014 },
  { title: "Rivian", slug: "rivian", hex: "2C6E49", region: "American", country: "USA", founded: 2009 },
  { title: "Saleen", slug: "saleen", hex: "1A1A1A", region: "American", country: "USA", founded: 1983 },
  { title: "Shelby", slug: "shelby", hex: "8B0000", region: "American", country: "USA", founded: 1962 },
  { title: "SSC", slug: "ssc", hex: "1A1A1A", region: "American", country: "USA", founded: 1998 },
  { title: "Tesla", slug: "tesla", hex: "CC0000", region: "American", country: "USA", founded: 2003 },
  { title: "Vector", slug: "vector", hex: "1A1A1A", region: "American", country: "USA", founded: 1978 },
  // Swedish
  { title: "Koenigsegg", slug: "koenigsegg", hex: "FFCC00", region: "Swedish", country: "Sweden", founded: 1994 },
  { title: "Polestar", slug: "polestar", hex: "1A1A1A", region: "Swedish", country: "Sweden", founded: 2017 },
  { title: "Saab", slug: "saab", hex: "003087", region: "Swedish", country: "Sweden", founded: 1945 },
  { title: "Volvo", slug: "volvo", hex: "003087", region: "Swedish", country: "Sweden", founded: 1927 },
  // Japanese
  { title: "Acura", slug: "acura", hex: "1A1A1A", region: "Japanese", country: "Japan", founded: 1986 },
  { title: "Honda", slug: "honda", hex: "CC0000", region: "Japanese", country: "Japan", founded: 1948 },
  { title: "Infiniti", slug: "infiniti", hex: "1A1A1A", region: "Japanese", country: "Japan", founded: 1989 },
  { title: "Lexus", slug: "lexus", hex: "1A1A1A", region: "Japanese", country: "Japan", founded: 1989 },
  { title: "Mazda", slug: "mazda", hex: "1A1A1A", region: "Japanese", country: "Japan", founded: 1920 },
  { title: "Mitsubishi", slug: "mitsubishi", hex: "CC0000", region: "Japanese", country: "Japan", founded: 1970 },
  { title: "Nissan", slug: "nissan", hex: "C3002F", region: "Japanese", country: "Japan", founded: 1933 },
  { title: "Subaru", slug: "subaru", hex: "003087", region: "Japanese", country: "Japan", founded: 1953 },
  { title: "Toyota", slug: "toyota", hex: "CC0000", region: "Japanese", country: "Japan", founded: 1937 },
  // Korean
  { title: "Genesis", slug: "genesis", hex: "1A1A1A", region: "Korean", country: "South Korea", founded: 2015 },
  { title: "Hyundai", slug: "hyundai", hex: "003087", region: "Korean", country: "South Korea", founded: 1967 },
  { title: "Kia", slug: "kia", hex: "CC0000", region: "Korean", country: "South Korea", founded: 1944 },
  // Spanish
  { title: "Cupra", slug: "cupra", hex: "C4A862", region: "Spanish", country: "Spain", founded: 2018 },
  { title: "Hispano Suiza", slug: "hispano-suiza", hex: "003087", region: "Spanish", country: "Spain", founded: 1904 },
  { title: "SEAT", slug: "seat", hex: "CC0000", region: "Spanish", country: "Spain", founded: 1950 },
  // Other
  { title: "Dacia", slug: "dacia", hex: "003087", region: "Other", country: "Romania", founded: 1966 },
  { title: "KTM", slug: "ktm", hex: "FF6600", region: "Other", country: "Austria", founded: 1934 },
  { title: "NIO", slug: "nio", hex: "1A1A1A", region: "Other", country: "China", founded: 2014 },
  { title: "Rimac", slug: "rimac", hex: "0033A0", region: "Other", country: "Croatia", founded: 2009 },
  { title: "Skoda", slug: "skoda", hex: "4B7B35", region: "Other", country: "Czech Republic", founded: 1895 },
  { title: "Spyker", slug: "spyker", hex: "003087", region: "Other", country: "Netherlands", founded: 1999 },
  { title: "W Motors", slug: "w-motors", hex: "1A1A1A", region: "Other", country: "UAE", founded: 2012 },
  { title: "Zenvo", slug: "zenvo", hex: "1A1A1A", region: "Other", country: "Denmark", founded: 2004 },
];

function generateBrandNameType(): string {
  const slugs = BRANDS.map((b) => `  | "${b.slug}"`).join("\n");
  return slugs;
}

function generateBrandsFile(): string {
  const sorted = [...BRANDS].sort((a, b) => a.slug.localeCompare(b.slug));

  const entries = sorted
    .map(
      (b) =>
        `  "${b.slug}": { title: "${b.title}", slug: "${b.slug}", country: "${b.country}", region: "${b.region}", founded: ${b.founded}, hex: "${b.hex}" },`
    )
    .join("\n");

  return `import type { CarLogoMeta, BrandName } from "./types";

export const brands: Record<BrandName, CarLogoMeta> = {
${entries}
};
`;
}

// Generate brands.ts
const brandsContent = generateBrandsFile();
writeFileSync(join(__dirname, "..", "src", "brands.ts"), brandsContent, "utf-8");
console.log("Generated: src/brands.ts");

console.log(`\nDone! Registry contains ${BRANDS.length} brands.`);
console.log("Note: Update BrandName type in src/types.ts if brands were added/removed.");
console.log("BrandName slugs:\n" + generateBrandNameType());
