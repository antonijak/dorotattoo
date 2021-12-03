<template>
  <footer class="c-footer">
    <div class="c-footer__content">
      <!----------------------- N A V I G A T I O N ----------------------->
      <nav v-if="$route.path === '/'" class="c-footer__navigation">
        <router-link to="/" class="footer-link main" v-scroll-to="'#image'">
          <p class="link__title">Doro tattoo</p>
        </router-link>

        <a href="#" v-scroll-to="'#form'" class="footer-link">
          <p class="link__title">{{ $t("FOOTER.MSG_GET_FORM") }}</p>
        </a>

        <a href="#" v-scroll-to="'#faq'" class="footer-link">
          <p class="link__title">{{ $t("FOOTER.FAQ") }}</p>
        </a>
      </nav>

      <!----------------------- L I N K S ----------------------->
      <div class="c-footer__links">
        <h4 class="c-footer__links__title">{{ $t("FOOTER.LINKS") }}</h4>
        <a
          class="link"
          href="https://www.instagram.com/doro_tattoo/"
          target="_blank"
        >
          <i class="fab fa-instagram icon"></i> doro_tattoo
        </a>
      </div>
    </div>

    <!----------------------- C O P Y R I G H T ----------------------->
    <small class="c-footer__copyright">
      Copyright © {{ year }}
      <a href="https://antonijakasum.com" target="_blank" class="link"
        >Antonija Kasum</a
      >. {{$t('FOOTER.COPYRIGHT')}}</small
    >
  </footer>
</template>

<script>
export default {
  name: "CFooter",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped lang="scss">
.c-footer {
  width: 100%;
  padding: 3rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 1200px) {
      flex-direction: row;
    }

    @media (min-width: 1980px) {
      width: 1440px;
    }
  }

  &__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      margin-bottom: 0;
    }

    @media (min-width: 1200px) {
      margin-right: 6rem;
    }

    .footer-link {
      text-decoration: none;
      color: $light-text;
      font-size: 1rem;
      font-weight: normal;
      padding: 0.25rem;

      @media (min-width: 768px) {
        margin-right: 1.5rem;
      }

      .link__title {
        font-family: "Nunito";
      }

      &:hover {
        color: gray;
      }

      &.main {
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }

  &__links {
    color: $light-text;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }

    &__title {
      padding: 0.25rem;
      margin-bottom: 0.5rem;
      font-weight: normal;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
      font-family: "Nunito";

      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 1.5rem;
      }
    }

    .link {
      color: $light-text;
      text-decoration: none;
      font-size: 1rem;
      padding: 0.25rem;
      font-family: "Nunito";

      &:hover {
        color: gray;
      }

      &:first-child {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
      }

      .icon {
        font-size: 1rem;
        margin-right: 0.25rem;
      }
    }
  }

  &__copyright {
    width: 100%;
    color: $secondary-text;
    text-align: center;
    margin-top: 3rem;

    .link {
      color: $light-text-secondary;
      text-decoration: none;

      &:hover {
        color: gray;
      }
    }
  }
}
</style>
