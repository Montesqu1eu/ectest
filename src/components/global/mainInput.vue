<template>
  <label class="global-input">
    <input
      class="global-input__content"
      v-bind="$attrs"
      :value="modelValue"
      @input="
        ($event) => {
          $emit('update:modelValue', $event.target.value);
        }
      "
    />
  </label>
</template>

<script>
export default {
  name: "mainInput",
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
};
</script>

<style lang="scss">
.global-input {
  &__content {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--white);
    border-radius: 3px;
    background-color: var(--input-bg);
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: var(--input-color);
    &:active,
    &:focus,
    &:hover {
      background-color: var(--white);
      border: 1px solid var(--blue);
    }
    &::placeholder {
      color: var(--placeholder-color);
    }
    &[type="range"] {
      padding: unset;
      height: 15px;
      -webkit-appearance: none;
      width: 100%;
      background: none;
      border: none;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        background: var(--range-bg);
        border-radius: 5px;
        border: 1px solid var(--white);
      }
      &::-webkit-slider-thumb {
        border: 3px solid var(--dark-blue);
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: var(--range-thumb);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -10px;
      }
      &::-moz-range-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        background: var(--range-bg);
        border-radius: 5px;
        border: 1px solid var(--white);
      }
      &::-moz-range-thumb {
        border: 3px solid var(--dark-blue);
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: var(--range-thumb);
        cursor: pointer;
      }
      &::-ms-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        background: var(--range-bg);
        border-radius: 5px;
        border: 1px solid var(--white);
      }
      &::-ms-thumb {
        margin-top: 1px;
        border: 3px solid var(--dark-blue);
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: var(--range-thumb);
        cursor: pointer;
      }
    }
  }
}
</style>
