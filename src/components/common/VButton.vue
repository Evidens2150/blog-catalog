<template>
  <button
    :disabled="disabled"
    :title="title"
    type="button"
    :class="buttonClassList"
    @click.prevent="handleClick"
  >
    <slot>
      Кнопка
    </slot>
  </button>
</template>

<script setup lang='ts'>
// Modules
import { computed, toRefs } from 'vue';
// Types
import { IButtonProps } from '@/types';

// Props
const props = withDefaults(defineProps<IButtonProps>(), {
  disabled: false,
  title: '',
  theme: 'primary',
  rounded: false,
});

const {
  disabled,
  title,
  theme,
  rounded,
} = toRefs(props);

// Emit
const emit = defineEmits<{
  (e: 'click'): void
}>();

// Computed
const buttonClassList = computed((): string[] => {
  const classList = [
    'button',
    `button--${theme.value}`,
  ]

  if (rounded.value) {
    classList.push('button--rounded');
  }

  return classList;
});

// Methods
const handleClick = () => {
  emit('click');
};
</script>

<style lang='scss'>

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;

  border: none;
  border-radius: 12px;

  font-size: 16px;
  line-height: 100%;

  color: #101010;

  opacity: 1;

  transition: all 0.2s ease;

  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled),  
  &:focus:not(:disabled),
  &:active:not(:disabled)  {
    background-color: #E8E8E8;
  }

  &--primary {
    background-color: #F3F3F3;
  }

  &--secondary {
    color: #FFFFFF;
    background-color: #101010;

    &:hover:not(:disabled),  
    &:focus:not(:disabled),
    &:active:not(:disabled)  {
      color: #101010;
    }
  }

  &--transparent {
    background-color: #FFFFFF;
    border: 1px solid #E8E8E8;
    padding: 13px;
  }

  &--rounded {
    border-radius: 999px;
  }
}
</style>