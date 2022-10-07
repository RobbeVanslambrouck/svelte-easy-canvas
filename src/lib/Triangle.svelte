<script>
  import { getContext } from "svelte";
  import { draw } from "./EasyCanvas";

  export let key;
  export let x = 0,
    y = 0;

  draw((props) => {
    const { context: ctx } = props;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 25, y + 25);
    ctx.lineTo(x + 25, y - 25);
    ctx.fill();
  }, key);
</script>
