<template>
  <button
    class="c-button"
    :class="variant"
    @click.stop.prevent="$emit('click')"
  >
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
  padding: 0.75rem 1rem;
  border: 1px solid $button-secondary;
  background: transparent;
  color: $button-secondary;
  border-radius: 25px;
  min-width: 9rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: 600;
transition: all .2s linear;


  .text {
    letter-spacing: 1px;
  }

  &.primary {
    background-color: $button-primary;
    color: $primary-text;
  }

    &:hover {
    background-color: white;
    color: $primary-text;
    transform: scale(1.05);
  }
}
</style>
