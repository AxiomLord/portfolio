import {
  hiddenPhotoId as generatedHiddenPhotoId,
  photos as generatedPhotos,
} from "./photography.generated";
import type { PhotoAsset } from "./photography.types";

export const photos: readonly PhotoAsset[] = [...generatedPhotos]
  .reverse()
  .map((photo, index) => ({
    ...photo,
    no: String(index + 1).padStart(2, "0"),
  }));
export const hiddenPhotoId: string = generatedHiddenPhotoId;
export type Photo = PhotoAsset;

/**
 * Editorial names are keyed by the generated photo id. Generic frame labels
 * gave the eye nothing to hold on to, so the album uses short, adaptable names.
 * manifest so the pipeline stays free to rewrite itself; an id with no entry
 * falls back to its frame number.
 */
const photoTitles: Readonly<Record<string, string>> = {
  "back1-e1c68161": "Lakeside Overlook",
  "back2-b877a86a": "Summer Arcade",
  "back3-50a0171b": "Campus Light",
  "back4-9c795436": "Open Water",
  "back5-b719b88a": "Bridge at Dusk",
  "back6-41688dad": "A Wider View",
  "back7-d3f8117c": "Museum by the Water",
  "me1-3da32daf": "Home Ground",
  "me2-3142d1d3": "Above the Water",
  "me3-86a4f854": "Last Light",
};

export function photoLabel(photo: PhotoAsset): string {
  return photo.title ?? photoTitles[photo.id] ?? `Frame ${photo.no}`;
}

/**
 * Empty when neither a capture date nor safe EXIF survived the pipeline. The
 * caller hides the line rather than printing a placeholder, which read as a
 * build artifact leaking into the page.
 */
export function photoMeta(photo: PhotoAsset): string {
  const year = photo.capturedAt?.slice(0, 4);
  const technical = photo.exif
    ? [
        photo.exif.camera,
        photo.exif.lens,
        photo.exif.focalLength,
        photo.exif.aperture,
        photo.exif.shutterSpeed,
        photo.exif.iso ? `ISO ${photo.exif.iso}` : undefined,
      ].filter(Boolean)
    : [];
  return [year, ...technical].filter(Boolean).join(" · ");
}

export function stepPhotoIndex(index: number, delta: number): number {
  return (index + delta + photos.length) % photos.length;
}

export function formatFrameCount(count: number, compact: boolean): string {
  return compact ? `${count} SHOT` : `${count} FRAMES SHOT`;
}
