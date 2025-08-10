<template>
  <ul class="location-list">
    <li
      v-for="(location, index) in locationList"
      :key="index"
      class="location"
    >
      <p class="location__title">
        {{ location.title }}
      </p>

      <p
        v-for="(descriptionItem, descriptionIndex) in location.description"
        :key="descriptionIndex"
        class="location__description"
      >
        {{ descriptionItem }}
      </p>
      
      <nuxt-link
        v-if="location.link"
        :to="{ path: location.link }"
        class="location__link"
      >
        <location-icon/>
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup lang='ts'>
// Components
import LocationIcon from '@/components/common/icons/LocationIcon.vue';
// Types
import { ILocation } from '@/types';

// Data
const locationList: ILocation[] = [
  {
    title: 'For all questions',
    description: [
      '+7 (920) 278—00—68',
      'qtim@agency.com',
    ],
  },
  {
    title: 'Office in Russia',
    description: [
      '139 Ruben Station Lake Drew, NM 52678',
    ],
    link: '/',
  },
  {
    title: 'Office in Dubai',
    description: [
      '139 Ruben Station Lake Drew, NM 52678'
    ],
    link: '/',
  },
];
</script>

<style lang='scss'>
.location-list {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 36px;
  flex-wrap: wrap;
}

.location {
  width: 100%;
  max-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 4px;

  &__title {
    padding-bottom: 8px;
  }

  &__description {
    text-align: start;
  }
}

@media (max-width: 1023px) {
  .location-list {
    margin: 0;
    width: 100%;
    max-width: unset;
    flex-direction: row;
  }

  .footer__links {
    padding-bottom: 0;
  }

  .footer__button {
    order: 2;
  }
}

@media (max-width: 767px) {
  .footer__slogan {
    font-size: 80px;
  }
}
</style>