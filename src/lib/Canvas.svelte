<script>
  import { onMount, setContext } from "svelte";

  export let width = 100;
  export let height = 100;

  let canvas;
  let context;
  let props;

  let key = Symbol();
  let canvasObjects = [];
  let animationFrame;

  setContext(key, canvasObjects);

  onMount(() => {
    context = canvas.getContext("2d");
    props = { context, test: "test" };
  });

  function renderLoop() {
    animationFrame = requestAnimationFrame(renderLoop);
  }
</script>

<canvas bind:this={canvas} {width} {height}>
  <slot {props} />
</canvas>

<style>
  canvas {
    display: block;
  }
</style>
