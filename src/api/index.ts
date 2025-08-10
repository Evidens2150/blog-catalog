// Types
import { IPost } from '@/types';

const API_PATH_BACK = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work';

export const getPostList = async(): Promise<IPost[]> => {
  try {
    const response = await fetch(`${API_PATH_BACK}/posts/`);
    return response.json();
  } catch (error) {
    throw `Ошибка запроса списка публикаций: ${error}`;
  }
};

export const getPostById = async(id: number): Promise<IPost> => {
  try {
    const response = await fetch(`${API_PATH_BACK}/posts/${id}`);
    return response.json();
  } catch (error) {
    throw `Ошибка запроса публикации: ${error}`;
  }
};