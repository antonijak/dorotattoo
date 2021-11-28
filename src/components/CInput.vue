<template>
  <div class="c-input">
    <!---------------------- L A B E L ---------------------->
    <label
      :for="inputId"
      class="c-input__label"
      :class="{
        focused: focused || $isTrue(userInput),
        textarea: inputType === 'textarea',
      }"
      @click.stop="focusInput"
    >
      <span>{{ label }}<span v-if="required">*</span></span>

      <i
        v-if="infoText"
        class="fas fa-info-circle icon"
        @click.stop="showTooltip"
      ></i>
    </label>

    <!---------------------- T E X T A R E A ---------------------->

    <textarea
      v-if="inputType === 'textarea'"
      v-model="userInput"
      :maxlength="maxLength"
      :required="required"
      :class="{ focused: focused || $isTrue(userInput), error: errorMsg }"
      class="c-input__input textarea"
      @blur="blurInput"
      @focus="focusInput"
      :name="name"
      @input="handleInput"
    ></textarea>

    <!---------------------- I N P U T ---------------------->
    <input
      v-else
      :id="inputId"
      v-model="userInput"
      class="c-input__input"
      :type="inputType"
      @blur="blurInput"
      @focus="focusInput"
      :class="{ focused: focused || $isTrue(userInput), error: errorMsg }"
      :maxlength="maxLength"
      :required="required"
      :name="name"
      @input="handleInput"
    />

    <small v-if="errorMsg" class="c-input__error">
      {{ errorMsg }}
    </small>
  </div>
</template>

<script>
export default {
  name: "CInput",
  props: {
    inputId: String,
    name: String,
    label: String,
    inputType: {
      type: String,
      default: "text",
    },
    focusOnMount: {
      type: Boolean,
      default: false,
    },
    infoText: String, // TODO info tooltip
    required: {
      type: Boolean,
      default: false,
    },
    maxLength: Number, // TODO maxlength
    value: [String, Number],
    errMsg: String,
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
      errorMsg: "",
    };
  },
  methods: {
    showTooltop() {},
    focusInput() {
      this.focused = true;
    },
    blurInput() {
      this.focused = false;
      this.validateField();
    },
    handleInput() {
      this.$emit("input", this.userInput);
    },
    validateField() {
      let valid = true;
      // CHECK IF EMPTY
      if (this.required) {
        this.errorMsg = this.userInput === "" ? "Field can't be empty" : "";
      }

      // CHECK VALID TYPE
      if (this.inputType === "email") {
        const rgxEmail = /\S+@\S+\.\S+/;
        valid = rgxEmail.test(this.userInput);

        if (valid) {
          this.errorMsg = "";
        } else {
          this.errorMsg = "Please write valid email";
        }
      } else if (this.inputType === "text") {
        // TODO input type text validation
      } // TODO all input types validation
    },
  },
  watch: {
    errMsg() {
      // set form validation error
      this.errorMsg = this.errMsg;
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
  padding: 2.5rem 0;

  @media (min-width: 1200px) {
    padding-top: 1.5rem;
  }

  &__label {
    width: calc(100% - 2.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 5.5rem;
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
      bottom: 3.9rem;
      padding: 0;
      left: 1.25rem;
      font-size: 1rem;
      letter-spacing: 0;
    }

    &.focused {
      @media (min-width: 1200px) {
        width: 100%;
        left: 0;
        padding: 0;
        font-size: 0.8rem;
        bottom: calc(100% - 1.25rem);
      }
    }

    &.textarea {
      bottom: calc(100% - 3.5rem);

      @media (min-width: 1200px) {
        bottom: unset;
        top: 2.75rem;

        &.focused {
          left: 0;
          top: unset;
          bottom: calc(100% - 1.25rem);

          padding: 0;
          font-size: 0.8rem;
        }
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
    font-family: "Open Sans";

    &.textarea {
      height: 15rem;
      resize: none;

      @media (min-width: 768px) {
        height: 7rem;
      }
    }

    &.focused {
      background-color: $input-background-focused;
    }

    &.error {
      border: 1px solid $error-border;
    }

    &:hover {
      background-color: $input-background-focused;
    }
  }

  &__error {
    color: $error-text;
    padding: 0.25rem;
    position: absolute;
    bottom: 1rem;
    letter-spacing: 0.5px;
  }
}
</style>
