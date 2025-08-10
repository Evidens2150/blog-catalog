<template>
  <common-header/>
  <NuxtPage />
  <v-loader :loading="isLoading"/>
  <common-footer/>
</template>

<script setup lang="ts">
// Modules
import { computed } from 'vue';
// Components
import CommonHeader from '@/components/common/CommonHeader.vue';
import CommonFooter from '@/components/common/CommonFooter.vue';
import VLoader from '@/components/common/VLoader.vue';
// Store
import { useCommonStore } from '@/store';

// Data
const commonStore = useCommonStore();

// Computed
const isLoading = computed((): boolean => commonStore.isLoading);
</script>