<script setup lang="ts">
useSeoMeta({
  title:
    "About Josh Hudson – Full-Stack Web Developer Based in Brighton & Worthing",
  ogTitle:
    "About Josh Hudson – Full-Stack Web Developer Based in Brighton & Worthing",
  description:
    "Get to know Josh Hudson, a UK-based full-stack developer with a passion for clean code, CSS animations, and creative digital experiences. From freelancing to leading projects, discover his journey, skills, and values.",
  ogDescription:
    "Get to know Josh Hudson, a UK-based full-stack developer with a passion for clean code, CSS animations, and creative digital experiences. From freelancing to leading projects, discover his journey, skills, and values.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

import { onMounted, onBeforeUnmount, ref } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationFrameId: number;

interface Circle {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  hue: number;
}

let circles: Circle[] = [];

const resizeCanvas = () => {
  if (!canvas.value) return;
  canvas.value.width = canvas.value.clientWidth;
  canvas.value.height = canvas.value.clientHeight;
};

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const createCircles = (count = 60) => {
  if (!canvas.value) return;
  const { width, height } = canvas.value;
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
  if (!ctx || !canvas.value) return;
  const { width, height } = canvas.value;

  ctx.clearRect(0, 0, width, height);

  for (const c of circles) {
    c.x += c.dx;
    c.y += c.dy;

    // Bounce off edges
    if (c.x < 0 || c.x > width) c.dx *= -1;
    if (c.y < 0 || c.y > height) c.dy *= -1;

    ctx.beginPath();
    ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${c.hue}, 70%, 60%, 0.4)`;
    ctx.fill();
  }

  animationFrameId = requestAnimationFrame(animate);
};

const drawArt = () => {
  createCircles();
};

onMounted(() => {
  if (!canvas.value) return;
  ctx = canvas.value.getContext("2d");
  resizeCanvas();
  createCircles();
  animate();
  window.addEventListener("resize", resizeCanvas);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener("resize", resizeCanvas);
});
</script>

<template>
  <section class="about-section">
    <div class="container grid">
      <div class="about-content">
        <h1>About</h1>
        <p>
          I bring web ideas to life from the sunny South Coast, operating within
          Brighton's dynamic tech scene. As a Web Developer, I focus on
          delivering
          <strong>impactful and robust digital experiences</strong> by mastering
          a diverse set of technologies, including
          <strong>HTML, CSS, PHP, MySQL, JavaScript/JQuery, and Liquid</strong>.
          My expertise lies in crafting bespoke
          <strong>WordPress and Shopify</strong> solutions, complemented by
          growing knowledge in
          <strong>Laravel, React/NextJS, and Sanity</strong> CMS. I'm also
          currently exploring 3D with <strong>ThreeJS</strong>, always expanding
          my capabilities.
        </p>

        <p>
          Collaboration is at the heart of how I work, ensuring every project
          truly transforms initial concepts into robust web solutions. My
          passion extends to the creative side, where I love to tinker with CSS
          animations and explore <strong>generative art</strong>. With solid
          <strong>server management</strong> and <strong>DevOps</strong>
          skills, I ensure every digital environment is not just functional, but
          secure. My journey, deeply supported by the Brighton dev community,
          began in 2017, and I've been building and learning ever since.
        </p>
        <NuxtLink class="btn secondary" to="/work">View my work</NuxtLink>
      </div>
      <div class="generative-art">
        <canvas ref="canvas" class="generative-canvas"></canvas>
        <!-- <button @click="drawArt" class="btn">Generate</button> -->
      </div>
    </div>
  </section>
</template>
