<template>
  <footer class="footer container">
    <p class="footer__top">
      Is there a project?
    </p>
    <div class="footer__middle">
      <p class="footer__slogan">
        Let’s work together
      </p>
      <footer-locations />
    </div>
    <div class="footer__bottom">
      <ul class="footer__links">
        <li
          v-for="(link, index) in firstLinkList"
          :key="index"
        >
          <nuxt-link
            :to="{ path: link.href }"
            class="footer__link"
          >
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
      <div class="footer__button-wrapper">
        <v-button
          theme="secondary"
          class="footer__button"
          @click="handleClickFooterButton(`Let's work`)"
        >
          Go
        </v-button>
      </div>
      <ul class="footer__links footer__links--secondary">
        <li
          v-for="(link, index) in secondLinkList"
          :key="index"
        >
          <nuxt-link
            :to="{ path: link.href }"
            class="footer__link"
          >
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Components
import VButton from '@/components/common/VButton.vue';
import FooterLocations from '@/components/common/FooterLocations.vue';
// Types
import { ILink } from '@/types';

// Data
const firstLinkList: ILink[] = [
  {
    href: '/',
    title: 'Facebook',
  },
  {
    href: '/',
    title: 'Instagram',
  },
  {
    href: '/',
    title: 'Telegram',
  },
];

const secondLinkList: ILink[] = [
  {
    href: '/',
    title: 'Behance',
  },
  {
    href: '/',
    title: 'Linkedn',
  },
  {
    href: '/',
    title: 'Privacy Policy',
  },
];

// Methods
const handleClickFooterButton = (text: string) => {
  console.log(`Clicked '${text}'`)
};
</script>

<style lang='scss'>
.footer {
  width: 100%;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  background-color: #E2BEFF;
  color: #101010;
  padding: 140px 112px 0;
  text-align: center;

  &__top {
    text-align: start;
  }

  &__middle {
    width: 100%;
    display: flex;
    gap: 24px;
  }

  &__slogan {
    max-width: 495px;
    text-align: start;
    font-size: 112px;
    letter-spacing: 0;
    line-height: 100%;
  }

  &__bottom {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    margin-top: auto;
  }

  &__links {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 32px;
    padding-bottom: 30px;
    flex-shrink: 0;
  }

  &__link {
    position: relative;

    &::after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: #101010;
      position: absolute;
      top: 100%;
      left: 0;
    }

    &:hover,
    &:focus {
      opacity: .6;
    }
  }

  &__button-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__button.button {
    height: 179px;
    width: 100%;
    max-width: 358px;
    border-radius: unset;
    clip-path: ellipse(50% 100% at 50% 100%);
    padding: 25px;
    font-size: 32px;
    align-items: flex-end;
  }
}

@media (max-width: 1023px) {
  .footer {
    padding: 70px 56px 0;
    gap: 28px;
    min-height: fit-content;
  }

  .footer__middle {
    flex-wrap: wrap;
    gap: 36px;
  }

  .footer__slogan {
    font-size: 80px;
  }

  .footer__bottom {
    flex-wrap: wrap;
  }

  .footer__links {
    padding-bottom: 0;
  }

  .footer__button-wrapper {
    order: 2;
  }
}

@media (max-width: 767px) {
  .footer {
    padding: 35px 10px 0;
  }

  .footer__slogan {
    font-size: 60px;
  }
}
</style>