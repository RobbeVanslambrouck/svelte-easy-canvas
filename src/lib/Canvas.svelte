<script>
  import { onMount, setContext } from "svelte";

  export let width = 100;
  export let height = 100;

  let canvas;
  let context;
  let dt;
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
    dt = 0;
    props = { context, dt, width, height };
    renderLoop();
  });

  function renderLoop() {
    dt = (performance.now() - frameStart) / 1000;
    props.dt = dt;
    frameStart = performance.now();
    animationFrame = requestAnimationFrame(renderLoop);
    context.clearRect(0, 0, width, height);
    canvasEntities.forEach((entity) => {
      context.save();
      entity.draw(props);
      context.restore();
    });
  }
</script>

<canvas bind:this={canvas} {width} {height}>
  <slot />
</canvas>

<style>
  canvas {
    display: block;
  }
</style>
