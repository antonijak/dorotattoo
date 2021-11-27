<template>
  <div class="c-alert">
    <div class="c-alert__content" :class="mode">
      <i class="fas fa-times icon" @click.stop="$emit('close')"></i>

      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: String,
    mode: String,
  },
};
</script>

<style scoped lang="scss">
.c-alert {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.482);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background: white;
    color: $primary-text;
    position: relative;
    min-height: 8rem;
    width: 95%;
    padding: 3rem;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      min-height: 8rem;
      min-width: 30rem;
      width: unset;
    }

    .icon {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
      color: gray;

      &:hover {
        color: black;
      }
    }

    &.red {
      border: 2px solid red;
    }
  }
}
</style>
