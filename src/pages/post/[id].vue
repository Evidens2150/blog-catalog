<template>
  <div class="container page-content">
    <h1 class="page-title">{{ preparedPost.title }}</h1>

    <div class="post">
      <v-image
        :src="preparedPost.image"
        :alt="preparedPost.preview"
        class="post__image"
      />

      <p class="post__subtitle">
        About
      </p>

      <p class="post__description">
        {{ preparedPost.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Modules
import { ref, computed, } from 'vue';
import { useRoute, useRouter } from "vue-router";
// Components
import VImage from '@/components/common/VImage.vue';
// Store
import { useCommonStore } from '@/store';
// Types
import { IPost } from '@/types';

// Data
const commonStore = useCommonStore();
const route = useRoute();
const router = useRouter();
const currentPost = ref<IPost>({
  id: '',
  createdAt: '',
  title: '***************',
  preview: '',
  image: '',
  description: '',
});

// Computed
const postId = computed((): number => +route.params.id);
const preparedPost = computed((): IPost => {
  const imageHeight: number = postId.value + 470;
  const image: string = `https://placebear.com/640/${imageHeight}`;

  return {
    ...currentPost.value,
    image,
  }
});

// Methods
const getCurrentPost = async() => {
  try {
    currentPost.value = await commonStore.getPostById(postId.value)
  } catch (error) {
    console.error(error);
    router.push({path: '/'});
  }
};

// Hooks
getCurrentPost();
</script>

<style lang='scss'>
.post {
  display: flex;
  flex-direction: column;
  padding: 80px 0;

  &__image {
    aspect-ratio: 16 / 9;
    & .image {
      width: 100%;
      height: unset;
    }
  }

  &__subtitle {
    padding: 80px 0 32px;

    font-size: 16px;
    line-height: 100%;
  }

  &__description {
    max-width: 695px;
    font-size: 36px;
    line-height: 124%;
  }
}

@media (max-width: 1023px) {
  .post {
    padding: 60px 0;

  &__subtitle {
    padding: 60px 0 24px;

    font-size: 14px;
  }

    &__description {
      font-size: 28px;
    }
  }
}

@media (max-width: 767px) {
  .post {
    padding: 30px 0;

    &__subtitle {
      padding: 40px 0 18px;

      font-size: 12px;
    }

    &__description {
      font-size: 20px;
    }
  }
}
</style>
