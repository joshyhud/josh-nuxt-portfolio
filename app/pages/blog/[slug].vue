<script lang="ts" setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});
</script>

<template>
  <article v-if="post">
    <section class="post-header">
      <div class="container grid">
        <NuxtLink to="/blog" class="breadcrumb"> ← Back to blog </NuxtLink>
        <div class="blog-header-content">
          <h1>{{ post.title }}</h1>
          <div class="header-subtitle">
            <p class="text-gray-500 mt-[-0.5rem]">
              {{
                new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </p>
            <!-- Description -->
            <p class="mt-4 text-lg">{{ post.description }}</p>
          </div>
        </div>
        <!-- Featured image -->

        <div class="blog-header-image">
          <NuxtImg
            v-if="post.image"
            :src="post.image"
            :alt="post.title"
            class="rounded-xl mb-6"
          />
        </div>
      </div>
    </section>

    <section class="post-content">
      <div class="container">
        <ContentRenderer v-if="post" :value="post.body" />
      </div>
    </section>
  </article>

  <div v-else class="text-center py-12">Loading…</div>
</template>
