<script>
  import Canvas from "./lib/Canvas.svelte";
  import Stars from "./lib/Stars.svelte";

  let innerWidth;
  let innerHeight;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<Canvas width={innerWidth} height={innerHeight} backgroundColor="black">
  <Stars />
</Canvas>

<style>
</style>
