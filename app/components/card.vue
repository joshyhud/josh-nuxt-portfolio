<template>
  <div class="card">
    <template v-if="link">
      <a :href="link" class="card-link">
        <div v-if="cardClass" :class="['card-image', cardClass]">
          <NuxtImg v-if="image" :src="image" alt="Card image" />
        </div>
        <div v-else class="card-image">
          <NuxtImg v-if="image" :src="image" alt="Card image" />
        </div>
        <div class="card-content">
          <slot>
            <h3 v-if="title">{{ title }}</h3>
            <p v-if="text">{{ text }}</p>
          </slot>
        </div>
      </a>
    </template>
    <template v-else>
      <div>
        <div v-if="cardClass" :class="['card-image', cardClass]">
          <NuxtImg v-if="image" :src="image" alt="Card image" />
        </div>
        <div v-else class="card-image">
          <NuxtImg v-if="image" :src="image" alt="Card image" />
        </div>
        <div class="card-content">
          <slot>
            <h3 v-if="title">{{ title }}</h3>
            <p v-if="text">{{ text }}</p>
          </slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  cardClass: String,
  image: String,
  title: String,
  text: String,
  link: String,
});
</script>
