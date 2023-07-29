import { Roboto, Rubik, Zilla_Slab } from "next/font/google";

export const RUBIK = Rubik({
  variable: "--font-rubik",
  weight: ["500", "600", "700"],
  subsets: ["cyrillic"],
});
export const ROBOTO = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
});
export const ZILLA_SLAB = Zilla_Slab({
  variable: "--font-zilla",
  weight: ["400", "500"],
  subsets: ["latin"],
});
