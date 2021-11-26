<template>
  <div class="c-checkbox">
    <p class="c-checkbox__label">{{ label }}</p>

    <div v-for="field in fields" class="c-checkbox__field" :key="field.fieldId">
      <input
        class="input"
        :class="{ radio: type === 'radio' }"
        :type="type"
        :id="field.fieldId"
        :name="inputId"
      />
      <label class="label" :for="field.fieldId">{{ field.label }}</label>
    </div>
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
    inputId: String
  },
};
</script>

<style lang="scss" scoped>
.c-checkbox {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1.5rem;

  &__label {
    color: $light-text-secondary;
    width: 100%;
    text-align: left;
    margin-bottom: 1.25rem;
  }

  &__field {
    margin-right: 1.5rem;
    cursor: pointer;

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
}
</style>
