<script setup lang="ts">
import { withBase } from "vitepress";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

withDefaults(
  defineProps<{
    images: ImageItem[];
    columns?: number;
  }>(),
  {
    columns: 2,
  },
);
</script>

<template>
  <div class="image-grid" :style="{ '--columns': columns }">
    <figure v-for="(img, i) in images" :key="i" class="image-grid-item">
      <img :src="withBase(img.src)" :alt="img.alt" loading="lazy" />
      <figcaption v-if="img.caption || img.alt">
        {{ img.caption ?? img.alt }}
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 16px;
  margin: 24px 0;
}

.image-grid-item {
  margin: 0;
  text-align: center;
}

.image-grid-item img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.image-grid-item figcaption {
  margin-top: 8px;
  font-size: 0.85em;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>
