<template>
  <section class="project-list">
    <div class="container">
      <div class="section-header">
        <h2>All Projects</h2>
        <p>
          Browse through all of my projects, demonstrating a wide range of
          skills and technologies.
        </p>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in allProjects"
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

// Load all projects, sorted by createdAt descending
const allProjects = computed(() => {
  return projectsData.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
});
</script>
