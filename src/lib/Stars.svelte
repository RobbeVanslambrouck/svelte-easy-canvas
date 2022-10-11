<script>
  import { onMount } from "svelte";
  import { draw } from "./EasyCanvas";

  onMount(() => {
    init();
  });

  let init = () => {
    for (let i = 0; i < 1000; i++) {
      stars[i] = star();
    }
  };

  let maxZ = Math.max(innerWidth, innerHeight);

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let stars = [];
  const star = () => {
    let x = randomInt(-maxZ, maxZ);
    let y = randomInt(-maxZ, maxZ);
    let z = randomInt(0, maxZ);
    let radius = randomInt(5, 20);
    return { x, y, z, radius };
  };

  draw((props) => {
    const { context, dt, width, height } = props;
    for (const star of stars) {
      star.z -= 100 * dt;
      if (star.z <= 0) {
        star.x = randomInt(-maxZ, maxZ);
        star.y = randomInt(-maxZ, maxZ);
        star.radius = randomInt(5, 20);
        star.z = maxZ;
      }
      let sx = star.x / star.z;
      let sy = star.y / star.z;
      let r = (-star.radius * star.z) / maxZ + star.radius;
      context.translate(width / 2, height / 2);
      context.beginPath();
      context.arc(sx * width, sy * width, r, 0, 2 * Math.PI);
      context.fillStyle = "white";
      context.fill();
      context.closePath();
      context.translate(-width / 2, -height / 2);
    }
  });
</script>
