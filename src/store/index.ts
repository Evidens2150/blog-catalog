// Modules
import { defineStore } from 'pinia';
import { ref } from 'vue';
// Api
import {
  getPostList as ApiGetPostList,
  getPostById as ApiGetPostById,
} from '@/api';
// Types
import { IPost } from '@/types';


export const useCommonStore = defineStore('commonStore', () => {
  // State
  const postList = ref<IPost[]>([]);
  const isLoading = ref<boolean>(false);

  // Actions

  const getPostList = async(): Promise<void> => {
    try {
      setLoadingState(true);
      postList.value = await ApiGetPostList();
    } catch (error) {
      postList.value = [];
      console.error(error);
      throw error;
    } finally {
      setLoadingState(false);
    }
  };

  const getPostById = async(id: number): Promise<IPost> => {
    try {
      setLoadingState(true);
      return await ApiGetPostById(id);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoadingState(false);
    }
  };

  const setLoadingState = (value: boolean) => {
    isLoading.value = value;
  };

  return {
    // State
    postList,
    isLoading,

    // Actions
    getPostList,
    getPostById,
    setLoadingState,
  };
});