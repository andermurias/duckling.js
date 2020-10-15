interface PointerProperties extends CSSStyleDeclaration {
  pointerX: number;
  pointerY: number;
  shouldMove: number;
  scale: number;
  rotate: string;
  ease: string;
}

interface InteractionReturn {
  props: PointerProperties;
  track: boolean;
}

interface InteractionCallback {
  (elem: HTMLElement): InteractionReturn;
}

interface PointerReturn {
  pointer: HTMLDivElement;
  interactionConfig: Map<string, InteractionCallback>;
  initialProperties: PointerProperties;
}

interface Helper {
  px(pixels: number): string;
}

export function usePointer(properties?: PointerProperties): PointerReturn;

export const helper: Helper;
