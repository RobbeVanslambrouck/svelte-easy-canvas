<script>
  import Canvas from "./lib/Canvas.svelte";
  import Triangle from "./lib/Triangle.svelte";

  let innerWidth;
  let innerHeight;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<Canvas let:props={cp} width={innerWidth} height={innerHeight}>
  <Triangle props={cp} />
</Canvas>

<style>
</style>
