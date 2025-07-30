<script setup lang="ts">
useSeoMeta({
  title:
    "Josh Hudson – Full‑Stack Web Developer in Worthing & Brighton | HTML, CSS, JavaScript, PHP, WordPress & Shopify Expert",
  ogTitle:
    "Josh Hudson – Full‑Stack Web Developer in Worthing & Brighton | HTML, CSS, JavaScript, PHP, WordPress & Shopify Expert",
  description:
    "Experienced developer delivering custom WordPress, Shopify and bespoke web solutions. Passionate about CSS animations, generative art, server management & modern frameworks like React/Next.js. Check out my portfolio and blog.",
  ogDescription:
    "Experienced developer delivering custom WordPress, Shopify and bespoke web solutions. Passionate about CSS animations, generative art, server management & modern frameworks like React/Next.js. Check out my portfolio and blog.",
  ogImage: "https://example.com/image.webp",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <section class="hero">
    <div class="container grid">
      <Card fetchpriority="high" cardClass="sm" image="./img/profile.webp" />
      <div class="statement">
        <p>
          <accent>Hi, I'm Josh.</accent> I focus on impactful digital
          experiences. I'm a Web Developer who thrives on collaboration,
          transforming ideas into robust web solutions. From the sunny South
          Coast, I craft custom websites and bring innovative projects to life,
          fueled by a passion for code and creativity.
        </p>
      </div>
    </div>
  </section>

  <ProjectList />
</template>
