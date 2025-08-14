<script setup lang="ts">
import { NuxtImg } from "#components";
import { onMounted, onBeforeUnmount } from "vue";

const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").all();
});

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
  <div>
    <section class="blog-grid">
      <div class="container">
        <h1>Blog</h1>
        <div class="blog-cards">
          <div v-if="posts && posts.length > 0">
            <div v-for="post in posts" :key="post.id" class="blog-card">
              <NuxtLink :to="post.path">
                <div class="blog-card-image"></div>

                <div class="blog-card-content">
                  <h3 class="blog-card-title">{{ post.title }}</h3>
                  <p class="blog-card-date">
                    {{ new Date(post.date).toLocaleDateString() }}
                  </p>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div v-else>
            <p>Posts coming soon!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
