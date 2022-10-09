<script>
  import Ball from "./lib/Ball.svelte";
  import Canvas from "./lib/Canvas.svelte";
  import Triangle from "./lib/Triangle.svelte";

  let innerWidth;
  let innerHeight;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<Canvas width={innerWidth} height={innerHeight}>
  <Ball x={innerWidth / 2} y={innerHeight / 2} />
  <Triangle x={innerWidth / 2} y={innerHeight / 2} />
</Canvas>

<style>
</style>
