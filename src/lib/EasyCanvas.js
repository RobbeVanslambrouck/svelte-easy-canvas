import { getContext, onMount } from "svelte";

export const draw = (fn) => {
  const canvasContext = getContext("easy-canvas");
  const entity = {
    mounted: false,
  };
  entity.draw = fn;
  canvasContext.addEntity(entity);
  onMount(() => {
    entity.mounted = true;
    return () => {
      canvasContext.removeEntity(entity);
      entity.mounted = false;
    };
  });
};
