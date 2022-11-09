<template>
  <div class="order-step">
    <div class="order-step__img">
      <img :src="img" :alt="alt" />
    </div>
    <div class="order-step__description">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderStep",
  props: {
    img: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.order-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    background-color: var(--blue);
    border: 5px solid var(--dark-blue);
    border-radius: 50%;
    overflow: hidden;
  }

  &__description {
    font-size: 16px;
    line-height: 19px;
    color: var(--white);
    max-width: 190px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
