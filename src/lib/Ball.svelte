<script>
  import { draw } from "./EasyCanvas";

  export let x = 0,
    y = 0,
    radius = 10;

  draw((props) => {
    const { context, dt, width, height } = props;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true); // Outer circle
    context.stroke();
  });
</script>
