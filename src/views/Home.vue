<template>
  <div class="home">
    <!---------------- M A I N   I M A G E ---------------->
    <section class="home__section image" id="image">
      <img src="../assets/pexels-connor-danylenko-1414535.jpg" class="image" />
      <img src="../assets/symbol.svg" class="logo" />
    </section>

    <!---------------- F O R M ---------------->
    <section class="home__section" id="form">
      <div class="home__section__content">
        <c-form @submitted="showAlert" />
      </div>
    </section>

    <!---------------- F A Q ---------------->
    <section class="home__section faq" id="faq">
      <div class="home__section__content">
        <h3 class="section-title">{{ $t("FAQ.TITLE") }}</h3>

        <ul class="faq__questions">
          <li
            v-for="(question, index) in questions"
            :key="question.q"
            class="faq-question"
          >
            <h4 @click="showAnswer(index)" class="question">
              {{ question.q }}
            </h4>

            <ul
              v-if="visibleIndex === index && Array.isArray(question.a)"
              class="answer"
            >
              <li v-for="item in question.a" :key="item" class="answer__part">
                {{ item }}
              </li>
            </ul>

            <p v-else-if="visibleIndex === index" class="answer">
              {{ question.a }}
            </p>
          </li>
        </ul>
      </div>
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
  data() {
    return {
      visibleIndex: null,
    };
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
    showAnswer(index) {
      if (this.visibleIndex === index) {
        this.visibleIndex = null;
      } else {
        this.visibleIndex = index;
      }
    },
  },
  computed: {
    questions() {
      return this.$t("FAQ.QUESTIONS", { returnObjects: true });
    },
  },
};
CForm;
</script>

<style scoped lang="scss">
.home {
  width: 100%;

  &__section {
    width: 100%;
    min-height: 100vh;
    color: $light-text;
    display: flex;
    justify-content: center;

    &__content {
      padding: 3.5rem 0.5rem;
      display: flex;
      justify-content: center;
      width: 100%;

      @media (min-width: 1200px) {
        padding: 6rem;
        width: 1000px;
      }

      @media (min-width: 1980px) {
        max-width: 1440px;
        width: 1440px;
      }
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
      width: 100%;
      flex-direction: column;
      align-items: center;

      .home__section__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $dark-text;

        .faq__questions {
          width: 100%;
          list-style: none;
          margin-top: 3rem;
          padding: 0 1rem;

          @media (min-width: 1200px) {
            padding: 0;
          }

          .faq-question {
            cursor: pointer;

            @media (min-width: 1200px) {
              &:hover {
                color: $primary-text;
              }
            }

            .question {
              font-weight: 600;
              padding: 1.5rem 0;
              line-height: 1.75rem;
              font-size: 1.1rem;
            }

            .answer {
              width: 100%;
              line-height: 2rem;
              margin-bottom: 1.5rem;

              &__part {
                margin-bottom: 1rem;
                margin-left: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
