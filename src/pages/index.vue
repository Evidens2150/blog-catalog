<template>
  <div class="container page-content">
    <h1 class="page-title">Articles</h1>

    <ul class="card-list">
      <li v-if="!postList.length">
        Список публикаций пуст
      </li>
      <li
        v-for="post in paginatedItems"
        :key="post.id"
      >
        <post-card
          v-bind="post"
        />
      </li>
    </ul>

    <v-pagination
      v-if="isPagination"
      :current-page="currentPage"
      :max-page="maxPage"
      @change-page="changePage"
    />
  </div>
</template>

<script setup lang="ts">
// Modules
import { ref, computed } from 'vue';
// Components
import VPagination from '@/components/common/VPagination.vue';
import PostCard from '@/components/PostCard.vue';
// Store
import { useCommonStore } from '@/store';
// Types
import { IPost } from '@/types';

// Data
const commonStore = useCommonStore();
const currentPage = ref<number>(1);

// Computed
const postList = computed((): IPost[] => 
  commonStore.postList.map(item => {
    const imageHeight: number = +item.id + 470;

    return {
      ...item,
      image: `https://placebear.com/640/${imageHeight}`,
    }
  })
);

const isPagination = computed((): boolean =>
  postList.value.length > 1
);

const paginatedItems = computed((): IPost[] => {
  if (!isPagination.value) return postList.value;
  
  const start: number = (currentPage.value - 1) * 8;
  const end: number = start + 8;
  return postList.value.slice(start, end);
});

const maxPage = computed((): number =>
  Math.ceil(postList.value.length / 8)
);

// Methods
const initPostList = async() => {
  try {
    await commonStore.getPostList();
  } catch (error) {
    console.error(error);
  }
};

const changePage = (page: number) => {
  currentPage.value = page;
}

// Hooks
initPostList();
</script>

<style lang="scss">
.card-list {
  width: 100%;
  min-height: 200px;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  row-gap: 40px;
  column-gap: 32px;
  padding: 60px 0 50px;
}

@media (max-width: 1023px) {
  .card-list {
    row-gap: 30px;
    column-gap: 24px;
    padding: 40px 0 25px;
  }
}

@media (max-width: 767px) {
  .card-list {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
    row-gap: 22px;
    column-gap: 12px;
    padding: 20px 0 15px;
  }
}
</style>