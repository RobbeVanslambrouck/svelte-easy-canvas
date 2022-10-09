<script>
  import { draw } from "./EasyCanvas";

  export let x = 0,
    y = 0;

  draw((props) => {
    const { context, dt } = props;

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 25, y + 25);
    context.lineTo(x + 25, y - 25);
    context.fill();
  });
</script>
