<template>
  <button
    class="global-button"
    :class="[kind]"
    :type="type"
    :style="{ padding: padding }"
  >
    <slot>Click</slot>
  </button>
</template>

<script>
export default {
  name: "mainButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    kind: {
      type: String,
      default: "main",
    },
    padding: {
      type: String,
      default: "15px 10px",
    },
  },
};
</script>

<style lang="scss">
.global-button {
  border-radius: 4px;
  font-weight: 400;
  font-size: 13px;
  text-transform: uppercase;

  &.blue {
    border: 1px solid var(--white);
    background-color: var(--blue);
    color: var(--white);
    &:hover {
      border: 1px solid var(--blue);
      background-color: var(--white);
      color: var(--blue);
    }
  }

  &.white {
    border: 1px solid var(--btn-gray);
    background-color: var(--white);
    color: var(--btn-black);
    &:hover {
      border: 1px solid var(--blue);
      background-color: var(--white);
      color: var(--blue);
    }
  }
}
</style>
