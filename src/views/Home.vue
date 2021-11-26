<template>
  <div class="home">
    <section class="home__section image">
      <img src="../assets/pexels-connor-danylenko-1414535.jpg" class="image" />
      <img src="../assets/symbol.svg" class="logo" />
    </section>

    <section class="home__section" id="form">
      <c-form />
    </section>

    <section class="home__section" id="faq">FAQ</section>
  </div>
</template>

<script>
import CForm from "../components/CForm.vue";
export default {
  name: "Home",
  components: {
    CForm,
  },
};
CForm;
</script>

<style scoped lang="scss">
.home {

  &__section {
    width: 100%;
    min-height: 100vh;
    padding: 3rem;

    &.image {
      position: relative;
      height: 100vh;
      padding: 0;

      &:after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: $main-background;
        top: 0;
        left: 0;
        opacity: 0.6;
      }

      .logo {
        position: absolute;
        height: 20rem;
        width: 20rem;
        top: calc(50% - 10rem);
        left: calc(50% - 10rem);
        z-index: 1;
        opacity: 0.8;
      }
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom center;
    }
  }
}
</style>
