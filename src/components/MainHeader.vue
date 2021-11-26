<template>
  <header class="main-header">
    <router-link to="/" class="link main">
      <h1 class="link__title">Doro tattoo</h1>
    </router-link>

    <nav v-if="$route.path === '/'" class="navigation">
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
  font-family: "Nunito", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.166);
  width: 100%;
  z-index: 1;

  .link {
    text-decoration: none;
    list-style: none;
    color: rgb(230, 230, 230);

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

  .navigation {
    display: flex;
    align-items: center;

    .link {
      margin-right: 1.5rem;

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
