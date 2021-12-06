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
  padding: 0.75rem 1rem;
  border: none;
  background: $button-secondary;
  color: $primary-text;
  border-radius: 25px;
  min-width: 10rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s linear;
  width: 80%;
  text-align: center;

  &:enabled {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: unset;
  }

  .text {
    letter-spacing: 1px;
  }

  &.primary {
    background-color: $button-primary;
    border-color: $button-primary;
    color: $light-text;

    @media (min-width: 1200px) {
      &:hover:enabled {
        background-color: $button-primary-hover;
        border-color: $button-primary-hover;
        transform: scale(1.05);
      }
    }
  }

  &.landing {
    background-color: rgba(255, 255, 255, 0.096);
    color: white;
    width: 70%;

    @media (min-width: 768px) {
      width: 12rem;
    }

    @media (min-width: 1200px) {
      &:hover:enabled {
        background-color: $button-primary-hover;
        border-color: $button-primary-hover;
        transform: scale(1.05);
      }
    }
  }

  @media (min-width: 1200px) {
    &:hover:enabled {
      background-color: $button-secondary-hover;
      transform: scale(1.05);
    }
  }

  &:disabled {
    transform: none;
    background-color: $button-disabled;
    color: rgba(255, 255, 255, 0.192);
    border-color: rgb(191, 191, 191);
  }
}
</style>
