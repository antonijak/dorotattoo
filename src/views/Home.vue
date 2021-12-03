<template>
  <div class="home">
    <!---------------- M A I N   I M A G E ---------------->
    <section class="home__section image" id="image">
      <img src="../assets/pexels-connor-danylenko-1414535.jpg" class="image" />
      <img src="../assets/symbol.svg" class="logo" />
    </section>

    <!---------------- F O R M ---------------->
    <section class="home__section" id="form">
      <c-form @submitted="showAlert" />
    </section>

    <!---------------- F A Q ---------------->
    <section class="home__section faq" id="faq">
      <h3 class="section-title">{{ $t('HOME.FAQ') }}</h3>
      <p>...coming soon</p>
    </section>
  </div>
</template>

<script>
import CForm from "../components/CForm.vue";
export default {
  name: "Home",
  components: {
    CForm,
  },
  methods: {
    showAlert(resSuccess) {
      if (resSuccess === "success") {
        this.$emit("alert", { message: "Contact sent succesfully!" });
      } else {
        this.$emit("alert", {
          message: "Contact sending failed!",
          mode: "red",
        });
      }
    },
  },
};
CForm;
</script>

<style scoped lang="scss">
.home {
  &__section {
    width: 100%;
    min-height: 100vh;
    padding: 3.5rem 0.5rem;
    color: $light-text;
    display: flex;
    justify-content: center;

    @media (min-width: 1200px) {
      padding: 6rem;
    }

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

    &.faq {
      background-color: $lighter-background;
      color: $primary-text;
      padding: 6rem 1.5rem;

      @media (min-width: 1200px) {
        padding: 6rem;
      }
    }
  }
}
</style>
