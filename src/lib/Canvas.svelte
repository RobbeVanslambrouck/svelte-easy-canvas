<script>
  import { onMount } from "svelte";

  export let width = 100;
  export let height = 100;

  let canvas;
  let context;

  onMount(() => {
    context = canvas.getContext("2d");
  });
</script>

<canvas bind:this={canvas} {width} {height} />

<style>
</style>
