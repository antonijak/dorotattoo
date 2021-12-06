<template>
  <div class="c-alert">
    <div class="c-alert__content" :class="mode">
      <i class="fas fa-times close" @click.stop="$emit('close')"></i>

      <i v-if="mode === 'red'" class="fas fa-times-circle icon"></i>

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
    background: $lighter-background;
    color: $dark-text;
    position: relative;
    min-height: 8rem;
    width: 95%;
    padding: 3rem;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      min-height: 8rem;
      min-width: 30rem;
      width: unset;
    }

    .close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
      color: $primary-text;

      &:hover {
        color: $light-text;
      }
    }

    .icon {
      font-size: 4rem;
      color: rgb(185, 34, 34);
      margin-bottom: 1.5rem;
    }

    &.red {
      color: rgb(94, 0, 0);
    }
  }
}
</style>
