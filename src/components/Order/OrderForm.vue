<template>
  <form action="#" class="order-form">
    <div class="order-form__top">
      <main-select
        name="email"
        :options="options"
        default="Выберите тип системы"
        class="select"
      />
      <main-input name="name" placeholder="Ваше имя" />
      <main-input name="name" placeholder="Ваше имя" />
    </div>
    <div class="order-form__mid">
      <div class="order-form__range">
        <div class="range__title">
          <span>Sed ut perspiciatis, unde omnis iste natus</span>
          <span>75 %</span>
        </div>
        <main-input name="percent" type="range" />
      </div>
      <label class="order-form__file" for="order-file">
        Прикрепить файл
        <input type="file" id="order-file" />
      </label>
    </div>
    <main-button type="submit" kind="blue" class="order-form__submit"
      >Отправить</main-button
    >
  </form>
</template>

<script>
const options = ["go", "python", "rust", "javascript"];
export default {
  name: "OrderForm",
  data() {
    return {
      options,
    };
  },
};
</script>

<style lang="scss">
.order-form {
  &__top {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 370px));
    justify-content: center;
    grid-gap: 30px;
    margin-bottom: 30px;
    @media screen and (max-width: 480px) {
      padding: 0 10px;
    }
  }
  &__mid {
    display: grid;
    grid-template-columns: 1fr 370px;
    align-items: flex-start;
    gap: 30px;
    margin-bottom: 40px;
    @media screen and (max-width: 1200px) {
      grid-template-columns: minmax(300px, 770px);
      justify-content: center;
      padding: 0 10px;
    }
  }
  &__range {
    flex-grow: 1;
    @media screen and (max-width: 768px) {
      max-width: 370px;
      margin: 0 auto;
    }
    & .range {
      &__title {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        font-weight: 400;
        font-size: 18px;
        color: var(--white);
        margin-bottom: 5px;
        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
  &__file {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 12px 24px;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    background-color: var(--white);
    border: 1px solid var(--blue);
    border-radius: 3px;
    transition: 0.3s;
    &:hover {
      background-color: var(--blue);
      border: 1px solid var(--white);
    }
    &::before {
      display: block;
      content: "";
      width: 18px;
      height: 20px;
      background: url("~@/assets/img/file.svg");
    }
    & input {
      display: none;
    }
    @media screen and (max-width: 1200px) {
      max-width: 370px;
      margin: 0 auto;
    }
  }
  &__submit {
    display: block;
    margin: 0 auto;
    max-width: 370px;
    width: 100%;
    @media screen and (max-width: 480px) {
      max-width: 200px;
    }
  }
}
</style>
