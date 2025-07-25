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

      <!-- Filter Dropdown -->
      <div class="filter">
        <label for="tech-filter">Filter by Technology:</label>
        <select id="tech-filter" v-model="selectedTech">
          <option value="">All</option>
          <option v-for="tech in allTechnologies" :key="tech" :value="tech">
            {{ tech }}
          </option>
        </select>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in paginatedProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div class="pagination" v-if="totalPages > 1">
        <button :disabled="currentPage === 1" @click="currentPage--">
          Prev
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++">
          Next
        </button>
      </div>

      <div class="section-footer">
        <a to="/work" class="btn secondary"> View All Projects </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import projectsData from "~/data/projects.json";

const pageSize = 6;
const currentPage = ref(1);
const selectedTech = ref("");

// Get all unique technologies
const allTechnologies = computed(() => {
  const techSet = new Set();
  projectsData.forEach((project) => {
    (project.technologies || []).forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
});

// Filtered projects by selected technology
const filteredProjects = computed(() => {
  if (!selectedTech.value) return projectsData;
  return projectsData.filter((project) =>
    (project.technologies || []).includes(selectedTech.value)
  );
});

const allProjects = computed(() => {
  return filteredProjects.value.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
});

const totalPages = computed(() =>
  Math.ceil(allProjects.value.length / pageSize)
);

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return allProjects.value.slice(start, start + pageSize);
});

// Reset to first page when filter changes
watch(selectedTech, () => {
  currentPage.value = 1;
});
</script>
