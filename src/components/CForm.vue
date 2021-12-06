<template>
  <!-- if form changes the fields have to be defined also in form.html for netlify crawler -->
  <form
    class="c-form"
    name="contact"
    netlify
    mode="post"
    data-netlify-honeypot
    @submit.prevent="handleSubmit"
    :key="submitCount"
  >
    <fieldset class="c-form__section">
      <h3 class="subtitle">{{ $t("FORM.SUBTITLE_1") }}</h3>

      <c-checkbox
        :label="$t('FORM.PREVIOUS')"
        type="radio"
        :fields="[
          { fieldId: 'yes', value: 'y', label: $t('FORM.YES') },
          { fieldId: 'no', value: 'n', label: $t('FORM.NO') },
        ]"
        name="previous"
        v-model="form.previous"
        required
        :err-msg="errorMessages.previous"
      />

      <c-input
        inputType="text"
        inputId="size"
        name="size"
        :label="$t('FORM.SIZE')"
        required
        v-model="form.size"
        :err-msg="errorMessages.size"
      />

      <c-input
        inputType="text"
        inputId="placement"
        name="placement"
        :label="$t('FORM.PLACEMENT')"
        required
        v-model="form.placement"
        :err-msg="errorMessages.placement"
      />

      <c-input
        inputType="textarea"
        inputId="details"
        name="details"
        :label="$t('FORM.DETAILS')"
        required
        v-model="form.details"
        :err-msg="errorMessages.details"
      />
    </fieldset>

    <fieldset class="c-form__section">
      <h3 class="subtitle">{{ $t("FORM.SUBTITLE_2") }}</h3>

      <c-input
        inputType="text"
        inputId="name"
        name="name"
        :label="$t('FORM.NAME')"
        required
        v-model="form.name"
        :err-msg="errorMessages.name"
      />

      <c-input
        inputType="email"
        inputId="email"
        name="email"
        :label="$t('FORM.EMAIL')"
        required
        v-model="form.email"
        :err-msg="errorMessages.email"
      />

      <c-input
        inputType="text"
        inputId="instagram"
        name="instagram"
        :label="$t('FORM.INSTAGRAM')"
        v-model="form.instagram"
      />

      <c-input
        inputType="text"
        inputId="age"
        name="age"
        :label="$t('FORM.AGE')"
        v-model="form.age"
      />

      <c-input
        inputType="text"
        inputId="country"
        name="country"
        :label="$t('FORM.COUNTRY')"
        v-model="form.country"
      />

      <input type="hidden" name="form-name" value="contact" />

      <c-button
        type="submit"
        :text="$t('FORM.SEND')"
        variant="primary"
        @click="handleSubmit"
      />
    </fieldset>
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
  name: "CForm",
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
      // TODO make form definition object and dynamic form
      submitCount: 0,
    };
  },
  methods: {
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
            this.errorMessages[item] = "Field can't be empty";
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
            this.form = {
              previous: "",
              size: "",
              placement: "",
              details: "",
              name: "",
              age: "",
              country: "",
              instagram: "",
              email: "",
            };
            this.submitCount++;
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
  },
};
</script>

<style scoped lang="scss">
.c-form {
  min-height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 1980px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    border: none;
    padding: 1rem 1rem 1.5rem;
    border-radius: 3px;
    margin-bottom: 3rem;
    background-color: #364523;

    @media (min-width: 1200px) {
      padding: 2rem 2rem 2.5rem;
    }

    @media (min-width: 1980px) {
      width: calc(50% - 1.5rem);
      margin-bottom: 0;
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

    ::v-deep .c-button {
      margin-top: 1rem;
    }
  }
}
</style>
