// useGenerativeArt.ts
export function useGenerativeArt(canvasEl: HTMLCanvasElement) {
  console.log("useGenerativeArt initialized");
  let ctx: CanvasRenderingContext2D | null = null;
  let animationFrameId: number;
  let circles: Circle[] = [];

  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const createCircles = (count = 60) => {
    const { width, height } = canvasEl;
    circles = [];

    for (let i = 0; i < count; i++) {
      circles.push({
        x: random(0, width),
        y: random(0, height),
        radius: random(10, 30),
        dx: random(-0.5, 0.5),
        dy: random(-0.5, 0.5),
        hue: random(180, 360),
      });
    }
  };

  const animate = () => {
    const { width, height } = canvasEl;
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    for (const c of circles) {
      c.x += c.dx;
      c.y += c.dy;

      if (c.x < 0 || c.x > width) c.dx *= -1;
      if (c.y < 0 || c.y > height) c.dy *= -1;

      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${c.hue}, 70%, 60%, 0.4)`;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  const resizeCanvas = () => {
    canvasEl.width = canvasEl.clientWidth;
    canvasEl.height = canvasEl.clientHeight;
  };

  const start = () => {
    ctx = canvasEl.getContext("2d");
    resizeCanvas();
    createCircles();
    animate();
    window.addEventListener("resize", resizeCanvas);
  };

  const stop = () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", resizeCanvas);
  };

  return { start, stop };
}

interface Circle {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  hue: number;
}
