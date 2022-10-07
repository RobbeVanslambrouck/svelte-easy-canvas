<script>
  import { onMount, setContext } from "svelte";

  export let width = 100;
  export let height = 100;

  let canvas;
  let context;
  let props;

  let key = Symbol();
  let canvasEntities = [];
  let animationFrame;

  setContext(key, {
    addEntity(entity) {
      canvasEntities.push(entity);
    },
    removeEntity(entity) {
      const index = canvasEntities.indexOf(entity);
      canvasEntities.splice(index, 1);
    },
  });

  onMount(() => {
    context = canvas.getContext("2d");
    props = { context };
    renderLoop();
  });

  function renderLoop() {
    animationFrame = requestAnimationFrame(renderLoop);
    canvasEntities.forEach((entity) => {
      entity.draw(props);
    });
  }
</script>

<canvas bind:this={canvas} {width} {height}>
  <slot {key} />
</canvas>

<style>
  canvas {
    display: block;
  }
</style>
