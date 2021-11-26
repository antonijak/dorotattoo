<template>
  <form class="c-form">
    <fieldset class="c-form__section">
      <h3 class="subtitle">So, you'd like a tattoo?</h3>

      <c-checkbox
      label="Do you already have a tattoo?"
        type="radio"
        :fields="[
          { fieldId: 'yes', value: 'y', label: 'Yes' },
          { fieldId: 'no', value: 'n', label: 'No' },
        ]"
        inputId="previous"
      />

      <c-input
        inputType="text"
        inputId="size"
        label="What is the approximate tattoo size you had in mind?  eg: 10x15cm"
        required
      />

      <c-input
        inputType="text"
        inputId="placement"
        label="What part of the body would you like to tattoo?"
        required
      />

      <c-input
        inputType="text"
        inputId="details"
        label="Tell me something more about the tattoo you want"
        required
      />
    </fieldset>

    <fieldset class="c-form__section">
      <h3 class="subtitle">Sounds good :)</h3>

      <c-input
        inputType="text"
        inputId="name"
        label="What's your name? "
        required
      />
      <c-input inputType="text" inputId="age" label="How old are you?" />
      <c-input inputType="text" inputId="country" label="Where are you from?" />

      <c-input
        inputType="text"
        inputId="other"
        label="All done! :) Do you have something to add? Feel free to write some notes."
      />

      <c-button type="submit" text="Submit" variant="primary" />
    </fieldset>
  </form>
</template>

<script>
import CButton from "./CButton.vue";
import CCheckbox from "./CCheckbox.vue";
import CInput from "./CInput.vue";
export default {
  components: { CInput, CButton, CCheckbox },
  name: "CForm",
  props: {
    msg: String,
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
