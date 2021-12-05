<template>
  <header class="main-header">
    <router-link to="/" class="link main" v-scroll-to="'#image'">
      <h1 class="link__title">Doro tattoo</h1>
    </router-link>

    <!-------------- O P E N   M O B I L E -------------->
    <button class="menu-icon" @click="navVisible = !navVisible">
      <i class="fas fa-bars"></i>
    </button>

    <!-------------- N A V I G A T I O N -------------->
    <nav
      v-if="$route.path === '/'"
      class="navigation"
      :class="{ visible: navVisible }"
      @click="navVisible = false"
    >
      <a href="#" v-scroll-to="'#form'" class="link">
        <p class="link__title">{{ $t("MAIN_HEADER.MSG_GET_FORM") }}</p>
      </a>

      <a href="#" v-scroll-to="'#faq'" class="link">
        <p class="link__title">{{ $t("MAIN_HEADER.FAQ") }}</p>
      </a>

      <div
        class="link lang"
        @click="langVisible = !langVisible"
        @mouseover="langVisible = true"
      >
        <p class="link__title lang locale">
          {{ locale }}
        </p>

        <p
          v-for="lang in locales.slice(1, locales.length)"
          :key="lang"
          class="link__title lang mobile"
          @click="setLocale(lang)"
        >
          {{ lang }}
        </p>

        <div
          v-if="langVisible"
          class="dropdown"
          @mouseout="langVisible = false"
        >
          <p
            v-for="lang in locales.slice(1, locales.length)"
            :key="lang"
            class="link__title lang"
            @click="setLocale(lang)"
          >
            {{ lang }}
          </p>
        </div>
      </div>
    </nav>

    <!-- <ul class="breadcrumbs">
      <router-link
        role="list"
        to="/"
        class="breadcrumbs__link title"
      >
        Doro tattoo
        <i class="fas fa-chevron-right icon"></i> 
      </router-link>

      <router-link
        role="list"
        v-for="(crumb, index) in breadcrumbs"
        :to="crumb.link"
        :key="crumb.link"
        class="breadcrumbs__link"
        :class="{ active: index === breadcrumbs.length - 1 }"
      >
        {{ crumb.name }}
        <i v-if="index < breadcrumbs.length - 1" class="fas fa-chevron-right icon"></i> 
      </router-link> 
    </ul>-->
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      breadcrumbs: [],
      navVisible: false,
      locales: ["hr", "en"],
      langVisible: false,
    };
  },
  mounted() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
    if (this.locale) {
      this.locales = this.locales.filter((item) => item !== this.locale);
      this.locales.unshift(this.locale);
    }
  },
  methods: {
    setLocale(lang) {
      this.$i18n.locale = lang;
      this.langVisible = false;
      this.$nextTick();
      localStorage.setItem("doroLANG", this.locale);
    },
  },
  watch: {
    $route() {
      this.breadcrumbs = this.$route.meta.breadcrumbs;
    },
    locale() {
      if (this.locale) {
        this.locales = this.locales.filter((item) => item !== this.locale);
        this.locales.unshift(this.locale);
      }
    },
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.166);
  width: 100%;
  z-index: 1;
  position: fixed;

  @media (min-width: 1980px) {
    padding: 0.75rem calc((100% - 1440px) / 2);
  }

  .link {
    text-decoration: none;
    list-style: none;
    color: rgb(230, 230, 230);
    position: relative;

    &.lang {
      cursor: pointer;
      &:hover {
        .dropdown {
          display: block;
        }
      }
    }

    &.main {
      font-size: 1.25rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    &__title {
      font-size: 1.25rem;
      font-weight: 600;
      font-family: "Nunito", sans-serif;

      &.lang {
        text-transform: uppercase;
      }

      &.mobile {
        @media (min-width: 1200px) {
          display: none;
        }
      }

      &.locale {
        display: none;
         @media (min-width: 1200px) {
          display: block;
        }
      }
    }

    .dropdown {
      position: absolute;
      top: calc(100% + 0.75rem);
      right: -0.75rem;
      background-color: rgba(0, 0, 0, 0.166);
      display: none;

       @media (min-width: 1200px) {
          display: block;
        }

      .link__title.lang {
        padding: 0.75rem;
        display: block;
      }
    }
  }

  .menu-icon {
    background-color: transparent;
    border: none;
    padding: 0;
    color: $light-text;
    font-size: 1.5rem;

    @media (min-width: 1200px) {
      display: none;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    visibility: hidden;
    position: absolute;
    top: 3.5rem;
    right: 0;
    z-index: 2;
    flex-direction: column;
    min-width: fit-content;

    @media (min-width: 1200px) {
      visibility: visible;
      position: static;
      flex-direction: row;
    }

    &.visible {
      visibility: visible;
    }

    .link {
      padding: 1rem;
      background-color: $main-background;
      width: 15rem;
      display: block;

      @media (min-width: 1200px) {
        padding: 0;
        background-color: transparent;
        margin-right: 1.5rem;
        width: fit-content;
        min-width: fit-content;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  //   .breadcrumbs {
  //     display: flex;
  //     align-items: center;

  //     &__link {
  //       text-decoration: none;
  //       color: $secondary-text;
  //       list-style: none;
  //       margin-right: 1rem;

  //       &.active {
  //         color: $primary;
  //       }

  //       &.title {
  //         font-weight: 600;
  //         display: flex;
  //         align-items: center;
  //       }

  //       .icon {
  //         font-size: 0.7rem;
  //         margin-left: 1rem;
  //       }
  //     }
  //   }
}
</style>
