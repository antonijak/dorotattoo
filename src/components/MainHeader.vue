<template>
  <header class="main-header">
    <router-link to="/" class="link main">
      <h1 class="link__title">Doro tattoo</h1>
    </router-link>

    <button class="menu-icon" @click="navVisible = true">
      <i class="fas fa-bars"></i>
    </button>

    <nav
      v-if="$route.path === '/'"
      class="navigation"
      :class="{ visible: navVisible }"
      @click="navVisible = false"
    >
      <a href="#" v-scroll-to="'#form'" class="link">
        <h2 class="link__title">I want a tattoo</h2>
      </a>

      <a href="#" v-scroll-to="'#faq'" class="link">
        <h2 class="link__title">FAQ</h2>
      </a>
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
    };
  },
  mounted() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
  },
  watch: {
    $route() {
      this.breadcrumbs = this.$route.meta.breadcrumbs;
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

  .link {
    text-decoration: none;
    list-style: none;
    color: rgb(230, 230, 230);
    font-family: "Nunito", sans-serif;

    &.main {
      font-size: 1.25rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    &__title {
      font-size: 1.25rem;
      font-weight: 600;
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

      @media (min-width: 1200px) {
        padding: 0;
        background-color: transparent;
        margin-right: 1.5rem;
        width: fit-content;
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
