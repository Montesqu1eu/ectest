<template>
  <div class="global-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <span>
        {{ selected }}
      </span>
    </div>
    <ul class="items" :class="{ selectHide: !open }">
      <li
        v-for="(option, i) in options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style lang="scss">
.global-select {
  position: relative;
  width: 100%;
  outline: none;
  & .selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: var(--select-bg);
    border-radius: 3px;
    border: 1px solid var(--white);
    color: var(--select-color);
    font-size: 18px;
    cursor: pointer;
    &.open {
      border: 1px solid var(--select-brdr);
      background: var(--selected-bg);
      color: var(--white);
      &:after {
        border-right: 1px solid var(--white);
        border-bottom: 1px solid var(--white);
        transform: rotateZ(-135deg);
      }
    }
    &:after {
      display: block;
      content: "";
      width: 7px;
      height: 7px;
      border-right: 1px solid var(--select-color);
      border-bottom: 1px solid var(--select-color);
      transition: 0.3s;
      transform: rotateZ(45deg);
    }
  }
  .items {
    color: #fff;
    border-radius: 0px 0px 3px 3px;
    overflow: hidden;
    border-right: 1px solid var(--select-brdr);
    border-left: 1px solid var(--select-brdr);
    border-bottom: 1px solid var(--select-brdr);
    position: absolute;
    background-color: var(--select-list-bg);
    left: 0;
    right: 0;
    z-index: 5;
    & li {
      color: var(--white);
      padding: 10px;
      cursor: pointer;
      user-select: none;
      &:hover {
        color: var(--select-item-hov);
      }
    }
  }
}

.selectHide {
  display: none;
}
</style>
