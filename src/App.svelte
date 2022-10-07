<script>
  import Canvas from "./lib/Canvas.svelte";
  import Triangle from "./lib/Triangle.svelte";

  let innerWidth;
  let innerHeight;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<Canvas let:key width={innerWidth} height={innerHeight}>
  <Triangle {key} />
  <Triangle {key} x={100} y={100} />
</Canvas>

<style>
</style>
