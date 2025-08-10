<template>
  <header class="header container">
    <nuxt-link
      :to="{ path: '/' }"
      class="header__link"
    >
      <logo-icon/>
    </nuxt-link>
    <nav class="header__navigation">
      <ul class="header__links">
        <li
          v-for="(link, index) in linkList"
          :key="index"
        >
          <nuxt-link
            :to="{ path: link.href }"
            class="header__link"
          >
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
      <div class="header__buttons">
        <v-button
          theme="transparent"
          rounded
          class="pagination__button"
          @click="handleClickHeaderButton('Select language')"
        >
          <uk-icon/>
        </v-button>

        <v-button
          theme="secondary"
          rounded
          class="pagination__button"
          @click="handleClickHeaderButton(`Let's work`)"
        >
          Let's work
        </v-button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Components
import VButton from '@/components/common/VButton.vue';
import LogoIcon from '@/components/common/icons/LogoIcon.vue';
import UkIcon from '@/components/common/icons/UkIcon.vue';
// Types
import { ILink } from '@/types';

// Data
const linkList: ILink[] = [
  {
    href: '/',
    title: 'Works',
  },
  {
    href: '/',
    title: 'About',
  },
];

// Methods
const handleClickHeaderButton = (text: string) => {
  console.log(`Clicked '${text}'`)
};
</script>

<style lang='scss'>
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 35px 40px;
  gap: 16px;

  &__link {
    flex-shrink: 0;
  }

  &__navigation {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 90px;
    row-gap: 16px;
  }

  &__links {
    display: flex;
    align-items: center;
    column-gap: 58px;
    row-gap: 16px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    column-gap: 16px;
    row-gap: 16px;
  }
}

@media (max-width: 767px) {
  .header {
    padding: 15px 20px;
  }
  .header__navigation,
  .header__links {
    column-gap: 16px;
  }
}
</style>