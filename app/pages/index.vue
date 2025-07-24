<template>
  <section class="hero">
    <div class="container grid">
      <Card cardClass="sm" image="/img/profile.png" />
      <div class="statement">
        <accent>Hi, I'm Josh.</accent> I focus on impactful digital experiences.
        I'm a Web Developer who thrives on collaboration, transforming ideas
        into robust web solutions. From the sunny South Coast, I craft custom
        websites and bring innovative projects to life, fueled by a passion for
        code and creativity.
      </div>
    </div>
  </section>

  <ProjectList />
</template>

<script setup>
// Homepage specific logic can go here
useHead({
  title: "Home - Your Site Name",
  meta: [{ name: "description", content: "Your homepage description" }],
});
</script>
