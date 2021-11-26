<template>
  <div class="c-input">
    <label
      :for="inputId"
      class="c-input__label"
      :class="{ focused: focused || $isTrue(userInput) }"
      @click.stop="focusInput"
    >
      <span>{{ label }}</span>
      <i class="fas fa-info-circle icon" @click.stop="showTooltip"></i>
    </label>

    <input
      :id="inputId"
      v-model="userInput"
      class="c-input__input"
      :type="inputType"
      @blur="blurInput"
      @focus="focusInput"
    />
  </div>
</template>

<script>
export default {
  name: "CInput",
  props: {
    inputId: String,
    label: String,
    inputType: {
      type: String,
      default: "text",
    },
    focusOnMount: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.focusOnMount) {
      this.focusInput();
    }
  },
  data() {
    return {
      userInput: "",
      focused: false,
    };
  },
  methods: {
    showTooltop() {},
    focusInput() {
      this.focused = true;
    },
    blurInput() {
      this.focused = false;
    },
  },
};
</script>

<style scoped lang="scss">
.c-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;

  &__label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    font-size: 1rem;
    color: $primary-text;
    cursor: text;
    padding: 1rem 0;
    transition: all 0.2s linear;

    &.focused {
      padding: 0;
      font-size: 0.7rem;
      color: $secondary-text;
    }

    .icon {
      cursor: pointer;
    }
  }

  &__input {
    width: 100%;
    border: none;
    border-bottom: 1px solid $input-border;
    padding: 1rem;
    background-color: transparent;
    outline: none;
  }
}
</style>
