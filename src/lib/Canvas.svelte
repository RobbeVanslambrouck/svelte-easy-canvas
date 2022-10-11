<script>
  import { onMount, setContext } from "svelte";

  export let width = 100;
  export let height = 100;
  export let backgroundColor = "rgba(0, 0, 0, 0)";

  let canvas;
  let canvasBackground;
  let context;
  let dt = 0;
  let frameStart = performance.now();
  let props;

  let key = "easy-canvas";
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
    renderLoop();
  });

  function renderLoop() {
    dt = (performance.now() - frameStart) / 1000;
    frameStart = performance.now();
    animationFrame = requestAnimationFrame(renderLoop);
    context.clearRect(0, 0, width, height);
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);
    props = { context, dt, width, height };
    canvasEntities.forEach((entity) => {
      if (entity.mounted && entity.draw) {
        context.save();
        entity.draw(props);
        context.restore();
      }
    });
  }
</script>

<div>
  <canvas bind:this={canvas} {width} {height}>
    <slot />
  </canvas>
</div>

<style>
  canvas {
    display: block;
  }
</style>
