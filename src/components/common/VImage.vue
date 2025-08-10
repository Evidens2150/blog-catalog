<template>
  <div class="image__wrapper">
    <img
      :src="src"
      :alt="alt"
      class="image"
    />
  </div>
</template>

<script setup lang="ts">
// Modules
import { toRefs } from "vue";
// Types
import { IImageProps } from '@/types';

// Props
const props = withDefaults(defineProps<IImageProps>(), {
  src: '',
  alt: '',
});

const {
  src,
  alt,
} = toRefs(props);
</script>

<style lang='scss'>
.image__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  aspect-ratio: 1 / 1;

  background: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f0f0f0 50%,
    #e0e0e0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  transition: all 0.2s ease;
}

.image {
  height: 100%;
  object-fit: contain;
}

@keyframes shimmer {
  100% {
    background-position: -200% 0;
  }
}
</style>