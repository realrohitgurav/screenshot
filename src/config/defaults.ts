export const SUPPORTED_ASPECT_RATIOS = {
  VIDEO: "aspect-video",
  PHONE: "aspect-[3/4]",
  SQUARE: "aspect-square",
  AUTO: "aspect-auto",
} as const;

export type AspectRatio =
  (typeof SUPPORTED_ASPECT_RATIOS)[keyof typeof SUPPORTED_ASPECT_RATIOS];

export type Settings = {
  aspectRatio: AspectRatio;
  scale: number;
  positionX: number;
  positionY: number;
  insetColor: string;
  insetPadding: number;
  backgroundColor: string;
  backgroundImage?: string;
  upscale: string;
};

export const defaultSettings: Settings = {
  aspectRatio: "aspect-video",
  scale: 90,
  positionX: 0,
  positionY: 0,
  insetColor: "#000000",
  insetPadding: 0,
  backgroundColor:
    "bg-gradient-to-br from-indigo-700 from-10% via-purple-600 via-30% to-pink-600 to-90% saturate-[125%]",
  upscale: "2",
};

export const suggestedSettings: Settings = {
  ...defaultSettings,
  insetPadding: 1,
};
