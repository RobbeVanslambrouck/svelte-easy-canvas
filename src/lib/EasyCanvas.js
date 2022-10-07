import { getContext } from "svelte";

export const draw = (fn, key) => {
  const canvasContext = getContext(key);
  const entity = {};
  entity.draw = fn;
  canvasContext.addEntity(entity);
};
