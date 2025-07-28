<template>
  <div class="blog-post">
    <h1>{{ post.title }}</h1>
    <div class="content" v-html="post.content"></div>
  </div>
</template>
