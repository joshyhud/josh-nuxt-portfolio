<template>
  <section class="project-list">
    <div class="container">
      <div class="section-header">
        <h2>Featured projects</h2>
        <p>
          Here are some of my latest projects showcasing various skills and
          technologies.
        </p>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in recentProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div class="section-footer">
        <a to="/work" class="btn secondary"> View All Projects </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import the project data
import projectsData from "~/data/projects.json";

// Get only projects where project.featured is true
const recentProjects = computed(() => {
  return projectsData
    .filter((project) => project.featured)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
});
</script>
