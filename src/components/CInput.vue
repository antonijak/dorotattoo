<template>
  <div class="c-input">
    <!---------------------- L A B E L ---------------------->
    <label
      :for="inputId"
      class="c-input__label"
      :class="{ focused: focused || $isTrue(userInput) }"
      @click.stop="focusInput"
    >
      <span>{{ label }}<span v-if="required">*</span></span>
      <i
        v-if="infoText"
        class="fas fa-info-circle icon"
        @click.stop="showTooltip"
      ></i>
    </label>

    <!---------------------- I N P U T ---------------------->
    <input
      :id="inputId"
      v-model="userInput"
      class="c-input__input"
      :type="inputType"
      @blur="blurInput"
      @focus="focusInput"
      :class="{ focused: focused || $isTrue(userInput) }"
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
    infoText: String,
    required: {
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
  padding-top: 2.5rem;

  @media (min-width: 1200px) {
    padding-top: 1.5rem;
  }

  &__label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 1.5rem;
    left: 0.5rem;
    font-size: 1rem;
    color: $primary-text;
    cursor: text;
    padding: 1.25rem 0;
    transition: all 0.2s linear;
    color: $light-text-secondary;
    text-align: left;
    font-size: 0.8rem;
    letter-spacing: 0.5px;

    @media (min-width: 1200px) {
      padding: 0;
      top: 2.75rem;
      left: 1rem;
      font-size: 1rem;
      letter-spacing: 0;
    }

    &.focused {
      padding: 0;
      font-size: 0.8rem;
      top: 0;
      letter-spacing: 0.5px;
      left: 0;

      @media (min-width: 1200px) {
        padding-left: 0.25rem;
         left: 0.5rem;
      }
    }

    .icon {
      cursor: pointer;
    }
  }

  &__input {
    width: 100%;
    border: none;
    background-color: $input-background;
    padding: 1.25rem;
    outline: none;
    border-radius: 3px;
    font-size: 1rem;
    color: $light-text;
    border: 1px solid $input-background;

    &.focused {
      background-color: $input-background-focused;
    }

    &:hover {
      background-color: $input-background-focused;
    }
  }
}
</style>
