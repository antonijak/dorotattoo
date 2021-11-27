<template>
  <button
    class="c-button"
    :class="variant"
    @click.stop.prevent="$emit('click')"
    :disabled="disabled"
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-button {
  padding: 0.5rem 1rem;
  border: 1px solid $button-secondary;
  background: transparent;
  color: $button-secondary;
  border-radius: 25px;
  min-width: 9rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s linear;
  width: 100%;

  @media (min-width: 768px) {
    width: unset;
  }

  .text {
    letter-spacing: 1px;
  }

  &.primary {
    background-color: $button-primary;
    border-color: $button-primary;
    color: $primary-text;
  }

  &:hover {
      background-color: $button-primary-hover;
    border-color: $button-primary-hover;
    color: $primary-text;
    transform: scale(1.05);
  }

  &:disabled {
    transform: none;
    background-color: rgb(191, 191, 191);
    color: rgb(160, 160, 160);
    border-color: rgb(191, 191, 191);
  }
}
</style>
