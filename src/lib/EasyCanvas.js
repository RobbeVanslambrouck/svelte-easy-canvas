import { getContext } from "svelte";

export const draw = (fn) => {
  const canvasContext = getContext("easy-canvas");
  const entity = {};
  entity.draw = fn;
  canvasContext.addEntity(entity);
};
