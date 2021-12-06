<template>
  <div class="home">
    <!---------------- M A I N   I M A G E ---------------->
    <section class="home__section image" id="image">
      <img src="../assets/pexels-connor-danylenko-1414535.jpg" class="image" />
      <img src="../assets/symbol.svg" class="logo" />
    </section>

    <!---------------- F O R M ---------------->
    <section class="home__section form" id="form">
      <div class="home__section__content">
        <!-- <c-form @submitted="showAlert" /> -->
        <animated-form
          :key="contactSubmitted"
          @submitted="showErr"
          @completed="contactSubmitted++"
        />
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
            :class="{ active: visibleIndex === index }"
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
// import CForm from "../components/CForm.vue";
import AnimatedForm from "../components/AnimatedForm.vue";
export default {
  name: "Home",
  components: {
    // CForm,
    AnimatedForm,
  },
  data() {
    return {
      visibleIndex: null,
      contactSubmitted: 0,
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
    showErr(resSuccess) {
      if (resSuccess === "success") {
        return;
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

      .section-title {
        font-family: Nunito;
        font-size: 1.5rem;
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

    &.form {
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-height: 812px) {
        max-height: 100vh;
      }

      .home__section__content {
        padding: 0 0.5rem;

        @media (min-width: 1200px) {
          padding: 0 6rem;
        }
      }
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

          @media (min-width: 768px) {
            padding: 0 1.5rem;
          }

          @media (min-width: 1200px) {
            padding: 0;
          }

          .faq-question {
            transition: all 0.2s linear;

            &.active {
              background-color: $main-background;
              padding: 0 1rem 1.5rem;
              border-radius: 3px;
              margin: 1rem 0;
              color: $light-text;

              @media (min-width: 768px) {
                padding: 1rem 2.5rem 2.5rem;
              }

              .question {
                &:hover {
                  color: $light-text;
                  transform: none;
                }
              }
            }

            .question {
              font-weight: 600;
              padding: 1.5rem 0;
              line-height: 1.5rem;
              font-size: 1.1rem;
              cursor: pointer;
              font-family: Nunito;
              transition: all 0.1s linear;

              @media (min-width: 768px) {
                font-size: 1.25rem;
                line-height: 1.75rem;
              }

              @media (min-width: 1200px) {
                &:hover {
                  color: $primary-text;
                  transform: scale(1.02) translate(8px, 0);
                }
              }
            }

            .answer {
              width: 100%;
              line-height: 1.75rem;
              font-size: 0.9rem;

              &__part {
                margin-bottom: 1rem;
                margin-left: 1.5rem;
              }

              @media (min-width: 768px) {
                line-height: 2rem;
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
