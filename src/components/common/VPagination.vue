<template>
  <div class="pagination">
    <v-button
      v-for="page in maxPage"
      :key="page"
      :class="[
        'pagination__button',
        {'pagination__button--active': checkActive(page)}
      ]"
      @click="handleClickPage(page)"
    >
      {{ page }}
    </v-button>

    <v-button
      class="pagination__button"
      :disabled="isNextPageButtonDisabled"
      @click="handleClickNext"
    >
      >
    </v-button>
  </div>
</template>

<script setup lang='ts'>
// Modules
import { computed, toRefs} from 'vue';
// Components
import VButton from '@/components/common/VButton.vue';
// Types
import { IPaginationProps } from '@/types';

// Props
const props = withDefaults(defineProps<IPaginationProps>(), {
  maxPage: 1,
  currentPage: 1,
});

const {
  maxPage,
  currentPage,
} = toRefs(props);

// Emit
const emit = defineEmits<{
  (e: 'change-page', value: number): void;
}>();

// Computed
const isNextPageButtonDisabled = computed((): boolean => 
  maxPage.value === currentPage.value
);

// Methods
const handleClickPage = (page: number) => {
  if (checkActive(page)) return;

  emit('change-page', page);
};

const handleClickNext = () => {
  handleClickPage(currentPage.value +  1);
};

const checkActive = (page: number) => (
  page === currentPage.value
);
</script>

<style lang='scss'>
.pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &__button {
    min-width: 44px;
  }

  &__button--active,
  &__button--active:not(:disabled):hover,
  &__button--active:not(:disabled):focus {
    background-color: #101010;
    color: #FFFFFF;
  }

  &__button--active:not(:disabled):hover {
    opacity: .8;
  }
}
</style>