<template>
  <div class="project-card">
    <div class="project-image">
      <NuxtImg loading="lazy" :src="project.image" :alt="project.title" />
      <div class="project-overlay">
        <div class="project-links">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            class="btn btn-primary"
          >
            View Live
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>

    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">{{ project.title }}</h3>
        <span v-if="project.featured" class="featured-badge">Featured</span>
      </div>

      <p class="project-description">{{ project.description }}</p>

      <div class="project-meta">
        <span class="project-category">{{ project.category }}</span>
        <span class="project-date">{{ formatDate(project.createdAt) }}</span>
      </div>

      <div class="project-technologies">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};
</script>
