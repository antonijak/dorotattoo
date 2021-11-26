<template>
  <button class="c-button" :class="variant">
    <!-- @slot icon -->
    <slot></slot>
    <span class="text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "CButton",
  props: {
    text: String,
    type: {
      type: String,
      default: "button",
    },
    variant: String,
  },
};
</script>

<style lang="scss" scoped>
.c-button {
  padding: 0.5rem 1rem;
  border: none;
  background: $button-secondary;
  color: $primary-text;
  border-radius: 15px;
  min-width: 7rem;

  .text {
    text-transform: uppercase;
    letter-spacing: .5px;
  }

  &.primary {
    background-color: $button-primary;
  }
}
</style>
