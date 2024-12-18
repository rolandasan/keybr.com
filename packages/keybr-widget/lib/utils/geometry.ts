import { Point } from "./point.ts";
import { Rect } from "./rect.ts";
import { Size } from "./size.ts";

export const getScreenSize = (): Size => {
  return new Size(window.innerWidth, window.innerHeight);
};

export const getScreenScrollOffset = (): Point => {
  return new Point(window.scrollX, window.scrollY);
};

export const getElementSize = (el: Element): Size => {
  return new Size(el.clientWidth, el.clientHeight);
};

export const getBoundingBox = (el: Element): Rect => {
  const { x, y, width, height } = el.getBoundingClientRect();
  return new Rect(x, y, width, height);
};

export const px = (length: string | number): string => {
  return typeof length === "number" ? `${length}px` : length;
};
