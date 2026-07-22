import type { ImageMetadata } from "astro";
import kapadokya from "../assets/tours/kapadokya.png";
import pamukkale from "../assets/tours/pamukkale.png";
import karadeniz from "../assets/tours/karadeniz.png";
import ege from "../assets/tours/ege.png";

/** Shared optimized tour photos, keyed by the tour `art` id. */
export const tourImages: Record<string, ImageMetadata> = {
  kapadokya,
  pamukkale,
  karadeniz,
  ege,
};
