<template>
  <section class="order" id="order">
    <div class="container">
      <div class="order__content">
        <h2 class="order__heading">
          Оформление <span class="blue">Заказа</span>
        </h2>
        <span class="order__description"
          >Перед заполнением формы ознакомьтесь с нашей схемой работы!</span
        >
        <ul class="order__list order-list">
          <li class="order-list__item" v-for="item in steps" :key="item">
            <OrderStep :img="item.img" :text="item.text" />
            <!--            <ul class="dots">-->
            <!--              <li class="dots__item" v-for="item in 5" :key="item"></li>-->
            <!--            </ul>-->
          </li>
          <li class="order-list__dots">
            <span v-for="i in 35" :key="i"></span>
          </li>
        </ul>
        <OrderForm />
      </div>
    </div>
  </section>
</template>

<script>
import OrderStep from "@/components/Order/OrderStep";
import OrderForm from "@/components/Order/OrderForm";

const steps = [
  {
    img: require("@/assets/img/search.svg"),
    text: "Lorem ipsum dolor sit amet",
  },
  {
    img: require("@/assets/img/percent.svg"),
    text: "Сonsecteturadipiscing elit",
  },
  {
    img: require("@/assets/img/document.svg"),
    text: "Sed do eiusmod tempor",
  },
  {
    img: require("@/assets/img/message.svg"),
    text: "Esse cillum dolore eu fugiat",
  },
  {
    img: require("@/assets/img/money.svg"),
    text: "Excepteur sint occaecat cupidatat non proident",
  },
];

export default {
  name: "OrderRegion",
  components: { OrderForm, OrderStep },
  data() {
    return {
      steps,
    };
  },
};
</script>

<style lang="scss">
.order {
  padding: 120px 0 150px 0;
  background: url("~@/assets/order-bg.png") no-repeat var(--order-bg);

  &__heading {
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 36px;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    & .blue {
      color: var(--blue);
    }
    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }

  &__description {
    display: block;
    margin-bottom: 80px;
    text-align: center;
    color: var(--gray);
    font-weight: 400;
    font-size: 18px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  &__decoration {
    position: relative;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    position: relative;
    flex-wrap: wrap;
    @media screen and (max-width: 1200px) {
      justify-content: center;
      gap: 30px;
    }
  }

  &-list {
    &__item {
      position: relative;
      z-index: 1;
    }
    &__dots {
      display: flex;
      justify-content: space-between;
      position: absolute;
      padding: 0 60px;
      transform: translateX(-50%);
      left: 50%;
      top: 47px;
      width: 100%;
      & span {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
      }
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
}

.order-list__item {
}
</style>
