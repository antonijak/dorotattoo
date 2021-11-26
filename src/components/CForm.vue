<template>
  <form class="c-form">
    <c-input inputType="text" inputId="name" label="Name" />

    <c-button type="submit" text="Submit" variant="primary"/>
  </form>
</template>

<script>
import CButton from "./CButton.vue";
import CInput from "./CInput.vue";
export default {
  components: { CInput, CButton },
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
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
