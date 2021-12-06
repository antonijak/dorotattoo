<template>
  <!-- if form changes the fields have to be defined also in form.html for netlify crawler -->
  <form
    class="animated-form"
    name="contact"
    netlify
    mode="post"
    data-netlify-honeypot
    @submit.prevent="handleSubmit"
  >
    <!-------------------- S T E P 1 -------------------->

    <span class="step" v-if="step < 6">{{ step }}/5</span>

    <fieldset
      v-if="step === 1"
      class="animated-form__section"
      :class="direction"
      key="1"
    >
      <h3 class="subtitle">{{ $t("ANIMATED_FORM.SUBTITLE_1") }}</h3>

      <c-checkbox
        :label="$t('ANIMATED_FORM.PREVIOUS')"
        type="radio"
        :fields="[
          { fieldId: 'yes', value: 'y', label: $t('ANIMATED_FORM.YES') },
          { fieldId: 'no', value: 'n', label: $t('ANIMATED_FORM.NO') },
        ]"
        name="previous"
        v-model="form.previous"
        required
        :err-msg="errorMessages.previous"
      />

      <c-button
        :text="$t('ANIMATED_FORM.NEXT')"
        variant="primary"
        :disabled="!step1Ready"
        @click="confirmStep(1)"
      />
    </fieldset>

    <!-------------------- S T E P 2 -------------------->

    <fieldset
      v-if="step === 2"
      class="animated-form__section"
      :class="direction"
      key="2"
    >
      <h3 class="subtitle">{{ $t("ANIMATED_FORM.SUBTITLE_2") }}</h3>

      <c-input
        inputType="text"
        inputId="size"
        key="size"
        name="size"
        :label="$t('ANIMATED_FORM.SIZE')"
        required
        v-model="form.size"
        :err-msg="errorMessages.size"
      />

      <c-input
        inputType="text"
        inputId="placement"
        key="placement"
        name="placement"
        :label="$t('ANIMATED_FORM.PLACEMENT')"
        required
        v-model="form.placement"
        :err-msg="errorMessages.placement"
      />

      <div class="buttons">
        <c-button :text="$t('ANIMATED_FORM.BACK')" @click="goBack" />

        <c-button
          :text="$t('ANIMATED_FORM.NEXT')"
          variant="primary"
          :disabled="!step2Ready"
          @click="confirmStep(2)"
        />
      </div>
    </fieldset>

    <!-------------------- S T E P 3 -------------------->

    <fieldset
      v-if="step === 3"
      class="animated-form__section"
      :class="direction"
      key="3"
    >
      <h3 class="subtitle">{{ $t("ANIMATED_FORM.SUBTITLE_3") }}</h3>

      <c-input
        inputType="textarea"
        inputId="details"
        key="details"
        name="details"
        :label="$t('ANIMATED_FORM.DETAILS')"
        required
        v-model="form.details"
        :err-msg="errorMessages.details"
      />

      <div class="buttons">
        <c-button :text="$t('ANIMATED_FORM.BACK')" @click="goBack" />

        <c-button
          :text="$t('ANIMATED_FORM.NEXT')"
          variant="primary"
          :disabled="!step3Ready"
          @click="confirmStep(3)"
        />
      </div>
    </fieldset>

    <!-------------------- S T E P 4 -------------------->

    <fieldset
      v-if="step === 4"
      class="animated-form__section"
      :class="direction"
      key="4"
    >
      <h3 class="subtitle">{{ $t("ANIMATED_FORM.SUBTITLE_4") }}</h3>

      <c-input
        inputType="text"
        inputId="name"
        key="name"
        name="name"
        :label="$t('ANIMATED_FORM.NAME')"
        required
        v-model="form.name"
        :err-msg="errorMessages.name"
      />

      <c-input
        inputType="email"
        inputId="email"
        key="email"
        name="email"
        :label="$t('ANIMATED_FORM.EMAIL')"
        required
        v-model="form.email"
        :err-msg="errorMessages.email"
        @err="setErr"
        validateOnInput
      />

      <div class="buttons">
        <c-button :text="$t('ANIMATED_FORM.BACK')" @click="goBack" />

        <c-button
          :text="$t('ANIMATED_FORM.NEXT')"
          variant="primary"
          :disabled="!step4Ready"
          @click="confirmStep(4)"
        />
      </div>
    </fieldset>

    <!-------------------- S T E P 5 -------------------->

    <fieldset
      v-if="step === 5"
      class="animated-form__section"
      :class="direction"
      key="5"
    >
      <h3 class="subtitle">{{ $t("ANIMATED_FORM.SUBTITLE_5") }}</h3>

      <c-input
        inputType="text"
        inputId="instagram"
        key="instagram"
        name="instagram"
        :label="$t('ANIMATED_FORM.INSTAGRAM')"
        v-model="form.instagram"
      />

      <c-input
        inputType="text"
        inputId="age"
        key="age"
        name="age"
        :label="$t('ANIMATED_FORM.AGE')"
        v-model="form.age"
      />

      <c-input
        inputType="text"
        inputId="country"
        key="country"
        name="country"
        :label="$t('ANIMATED_FORM.COUNTRY')"
        v-model="form.country"
      />

      <div class="buttons">
        <input type="hidden" name="form-name" value="contact" />

        <c-button :text="$t('ANIMATED_FORM.BACK')" @click="goBack" />

        <c-button
          type="submit"
          :text="$t('ANIMATED_FORM.SEND')"
          variant="primary"
          @click="handleSubmit"
        />
      </div>
    </fieldset>

    <div
      class="success-message slide-right"
      v-if="step === 6"
      :class="direction"
    >
      <i class="fas fa-check-circle icon"></i>

      <p class="success-message__text">{{ $t("ANIMATED_FORM.SUCCESS_MSG") }}</p>

      <c-button
        :text="$t('ANIMATED_FORM.SEND_ANOTHER')"
        @click="$emit('completed')"
      />
    </div>

    <div v-if="step < 6" class="animated-form__steps">
      <span
        v-for="index in 5"
        :key="index"
        class="step-indicator"
        :class="{ active: step === index }"
      ></span>
    </div>
  </form>
</template>

<script>
// TODO fieldset steps animation
import CButton from "./CButton.vue";
import CCheckbox from "./CCheckbox.vue";
import CInput from "./CInput.vue";
import axios from "axios";

export default {
  components: { CInput, CButton, CCheckbox },
  name: "AnimatedForm",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        previous: "",
        size: "",
        placement: "",
        details: "",
        name: "",
        age: "",
        email: "",
        instagram: "",
        country: "",
        other: "",
      },
      errorMessages: {
        previous: "",
        size: "",
        placement: "",
        details: "",
        name: "",
        email: "",
        instagram: "",
        age: "",
        country: "",
        other: "",
      },
      required: ["previous", "size", "placement", "details", "name", "email"],
      // TODO make form definition object and data-dynamic form
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step: 1,
      direction: "slide-right",
    };
  },
  methods: {
    confirmStep(step) {
      // check which step is being confirmed so going "next" doesn't skip the steps that are "ready"
      this.direction = "slide-right";
      if (step === 1 && this.step1Ready) {
        this.step++;
      }

      if (step === 2 && this.step2Ready) {
        this.step++;
      }

      if (step === 3 && this.step3Ready) {
        this.step++;
      }

      if (step === 4 && this.step3Ready) {
        this.step++;
      }
    },
    goBack() {
      this.direction = "slide-left";
      this.step--;
    },
    setErr(info) {
      this.errorMessages[info.field] = info.msg;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    validateForm() {
      if (this.formInvalid) {
        this.required.forEach((item) => {
          if (this.form[item] === "") {
            this.errorMessages[item] = this.$t("ANIMATED_FORM.ERR_MSG_EMPTY");
          }
        });
      }
    },
    handleSubmit() {
      this.validateForm();

      if (this.formInvalid) {
        return;
      } else {
        const axiosConfig = {
          header: { "Content-Type": "application/x-www-form-urlencoded" },
        };
        axios
          .post(
            "/",
            this.encode({
              "form-name": "contact",
              ...this.form,
            }),
            axiosConfig
          )
          .then(() => {
            this.$emit("submitted", "success");
            this.step++;
          })
          .catch(() => {
            this.$emit("submitted", "fail");
          });
      }
    },
  },
  computed: {
    formInvalid() {
      return (
        this.form.previous === "" ||
        this.form.size === "" ||
        this.form.placement === "" ||
        this.form.details === "" ||
        this.form.email === "" ||
        this.form.name === ""
      );
    },
    step1Ready() {
      return this.$isTrue(this.form.previous);
    },
    step2Ready() {
      return this.$isTrue(this.form.size) && this.$isTrue(this.form.placement);
    },
    step3Ready() {
      return this.$isTrue(this.form.details);
    },
    step4Ready() {
      return (
        this.$isTrue(this.form.name) &&
        this.$isTrue(this.form.email) &&
        this.errorMessages.name === "" &&
        this.errorMessages.email === ""
      );
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes slide-right {
  0% {
    transform: translate(100%, 0);
    opacity: 0;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes slide-left {
  0% {
    transform: translate(-100%, 0);
    opacity: 0;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.animated-form {
  min-height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 2rem;
  position: relative;

  .step {
    content: "";
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: $input-background;
    top: 0;
    left: calc(50% - 2rem);
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: Nunito;
    color: rgba(255, 255, 255, 0.308);
    letter-spacing: 2px;
  }

  &__section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    border: none;
    padding: 3rem 1rem 3rem;
    border-radius: 3px;
    background-color: $form-background;

    @media (min-width: 768px) {
      padding: 3rem 1.5rem;
    }

    @media (min-width: 1200px) {
      padding: 3rem 2rem 2.5rem;
    }

    @media (min-width: 1980px) {
      margin-bottom: 0;
    }

    &.slide-left {
      animation: slide-left 0.3s ease-in-out both;
      transform-origin: left center;
    }

    &.slide-right {
      animation: slide-right 0.3s ease-in-out both;
      transform-origin: right center;
    }

    .subtitle {
      color: $light-text;
      width: 100%;
      text-align: left;
      font-family: "Nunito", sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .buttons {
      width: 100%;
        display: flex;
        flex-direction: column-reverse;

      @media (min-width: 768px) {
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
      }

      ::v-deep .c-button {
        margin-top: 1.5rem;
        @media (min-width: 768px) {
          margin-left: 1.5rem;
        }
      }
    }
  }

  .success-message {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $form-background;
    padding: 6rem 1.5rem;
    border-radius: 3px;

    .icon {
      font-size: 4rem;
      color: $light-text;
      margin-bottom: 1.5rem;
    }

    &__text {
      font-size: 1.25rem;
      margin-bottom: 5rem;
    }
  }

  &__steps {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
      margin-top: -1rem;
      z-index: 1;
  

    @media (min-width: 768px) {
          margin-top: 3rem;
      }

    .step-indicator {
      height: 5px;
      width: 1.5rem;
      background-color: rgba(255, 255, 255, 0.151);
      margin-right: 1.5rem;
      display: block;
      border-radius: 3px;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        background-color: rgba(255, 255, 255, 0.63);
      }
    }
  }
}
</style>
