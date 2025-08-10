<template>
  <nuxt-link
    :to="{ path: `/post/${id}` }"
    class="card"
  >
    <v-image
      :src="image"
      :alt="title"
      class="card__image"
    />

    <p class="card__description">
      {{ preview }}
    </p>
  </nuxt-link>
</template>

<script setup lang="ts">
// Modules
import { toRefs } from "vue";
// Components
import VImage from '@/components/common/VImage.vue';
// Types
import { IPost } from '@/types';

// Props
const props = withDefaults(defineProps<IPost>(), {
  id: '',
  title: '',
  preview: '',
  image: '',
});

const {
  id,
  title,
  preview,
  image,
} = toRefs(props);
</script>

<style lang='scss'>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
    line-height: 120%;
    transition: all 0.2s ease;
  }

  &:hover,
  &:focus {
    opacity: 1;

    .card__image {
      scale: 1.1;
    }

    .card__description {
      text-decoration: underline;
    }
  }
}

@media (max-width: 1023px) {
  .card__description {
    font-size: 16px;
  }
}

@media (max-width: 767px) {
  .card__description {
    font-size: 14px;
  }
}
</style>