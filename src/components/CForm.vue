<template>
  <form
    class="c-form"
    name="contact"
    netlify
    mode="post"
    data-netlify-honeypot
    @submit.prevent="handleSubmit"
  >
    <fieldset class="c-form__section">
      <h3 class="subtitle">So, you'd like a tattoo?</h3>

      <c-checkbox
        label="Do you already have a tattoo?"
        type="radio"
        :fields="[
          { fieldId: 'yes', value: 'y', label: 'Yes' },
          { fieldId: 'no', value: 'n', label: 'No' },
        ]"
        name="previous"
        v-model="form.previous"
      />

      <c-input
        inputType="text"
        inputId="size"
        name="size"
        label="What is the approximate tattoo size you had in mind?  eg: 10x15cm"
        required
        v-model="form.size"
      />

      <c-input
        inputType="text"
        inputId="placement"
        name="placement"
        label="What part of the body would you like to tattoo?"
        required
        v-model="form.placement"
      />

      <c-input
        inputType="textarea"
        inputId="details"
        name="details"
        label="Tell me something more about the tattoo you want"
        required
        v-model="form.details"
      />
    </fieldset>

    <fieldset class="c-form__section">
      <h3 class="subtitle">Sounds good :)</h3>

      <c-input
        inputType="text"
        inputId="name"
        name="name"
        label="What's your name? "
        required
        v-model="form.name"
      />

      <c-input
        inputType="text"
        inputId="age"
        name="age"
        label="How old are you?"
        v-model="form.age"
      />

      <c-input
        inputType="text"
        inputId="country"
        name="country"
        label="Where are you from?"
        v-model="form.country"
      />

      <c-input
        inputType="textarea"
        inputId="other"
        name="other"
        label="All done! :) Do you have something to add? Feel free to write some notes."
        v-model="form.other"
      />

      <input type="hidden" name="form-name" value="contact" />

      <c-button
        type="submit"
        text="Send"
        variant="primary"
        @click="handleSubmit"
      />
    </fieldset>
  </form>
</template>

<script>
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
        country: "",
        other: "",
      },
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
    handleSubmit() {
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
            other: "",
          };
        })
        .catch(() => {
          this.$emit("submitted", "fail");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.c-form {
  min-height: fit-content;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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
