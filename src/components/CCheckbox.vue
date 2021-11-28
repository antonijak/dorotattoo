<template>
  <div class="c-checkbox">
    <p class="c-checkbox__label">{{ label }}<span v-if="required">*</span></p>

    <div v-for="field in fields" class="c-checkbox__field" :key="field.fieldId">
      <input
        class="input"
        :class="{ radio: type === 'radio' }"
        :type="type"
        :id="field.fieldId"
        :name="name"
        :value="field.value"
        :checked="$isTrue(value) && value === field.value"
        @click="handleClick"
      />

      <label class="label" :for="field.fieldId">
        {{ field.label }}
      </label>
    </div>

    <small v-if="errorMsg" class="c-checkbox__error">
      {{ errorMsg }}
    </small>
  </div>
</template>

<script>
export default {
  name: "CCheckbox",
  props: {
    type: {
      type: String,
      default: "checkbox",
    },
    fields: Array,
    label: String,
    name: String,
    value: String,
    required: Boolean,
    errMsg: String,
  },
  data() {
    return {
      errorMsg: "",
    };
  },
  methods: {
    handleClick(e) {
      this.$emit("input", e.target.value);
      this.errorMsg = "";
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

<style lang="scss" scoped>
.c-checkbox {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1.5rem 0 2.5rem;
  position: relative;

  &__label {
    color: $light-text-secondary;
    width: 100%;
    text-align: left;
    margin-bottom: 1.25rem;
  }

  &__field {
    margin-right: 1.5rem;
    cursor: pointer;

    &:hover {
      .input:before {
        background-color: $checkbox-background-focused;
      }
    }

    .label {
      color: $light-text-secondary;
      margin-left: 1rem;
      font-size: 0.9rem;
      cursor: pointer;
    }

    .input {
      position: relative;
      cursor: pointer;
      visibility: hidden;

      &:before {
        content: "";
        height: 21px;
        width: 21px;
        background-color: $input-background-focused;
        position: absolute;
        top: -1px;
        left: -1px;
        visibility: visible;
      }

      &.radio {
        &:before {
          border-radius: 50%;
        }

        &:checked {
          &:after {
            content: "";
            height: 0.8rem;
            width: 0.8rem;
            background-color: $light-text;
            position: absolute;
            top: 3px;
            left: 3px;
            border-radius: 50%;
            visibility: visible;
          }
        }
      }
    }
  }

  &__error {
    color: $error-text;
    padding: 0.25rem;
    position: absolute;
    bottom: 0.75rem;
    letter-spacing: 0.5px;
  }
}
</style>
