<template>
  <div class="not-found">
    <h2 class="text">Page not found</h2>

    <c-button @click="goBack">Back</c-button>
  </div>
</template>

<script>
import CButton from "../components/CButton.vue";
export default {
  components: { CButton },
  name: "NotFound",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  padding-top: 4rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
      margin-bottom: 1rem;
  }
}
</style>
