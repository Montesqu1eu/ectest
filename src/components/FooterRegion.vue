<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <span class="footer__copyrights">
          © 2018 «LOREMIPSUM.NET» Все права защищены.
        </span>
        <div class="line"></div>
        <ul class="footer__payment footer-payment">
          <li class="footer-payment__item" v-for="item in payments" :key="item">
            <img :src="item.img" :alt="item.title" />
            <span>{{ item.title }}</span>
          </li>
        </ul>
        <div class="line"></div>
        <ul class="footer__contacts footer-contacts">
          <li class="footer-contacts__item">
            <a href="mailto:info@ipsum228.com">
              <img src="@/assets/img/mail.svg" alt="mail" />
              <span> info@ipsum228.com </span>
            </a>
          </li>
          <li class="footer-contacts__item">
            <a href="https://vk.com/" target="_blank">
              <img src="@/assets/img/vk.svg" alt="mail" />
              <span>Мы вконтакте</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
const payments = [
  {
    title: "Qiwi wallet",
    img: require("@/assets/img/qiwi.svg"),
  },
  {
    title: "Yandex Money",
    img: require("@/assets/img/yandex-money.svg"),
  },
  {
    title: "Web Money",
    img: require("@/assets/img/web-money.svg"),
  },
];

export default {
  name: "FooterRegion",
  data() {
    return {
      payments,
    };
  },
};
</script>

<style lang="scss">
.footer {
  background-color: var(--footer-bg);
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 30px 10px;
    flex-wrap: wrap;
    & .line {
      height: 18px;
      border-right: 1px solid var(--footer-gray);
      @media screen and (max-width: 1200px) {
        max-width: 400px;
        height: unset;
        width: 100%;
        border-right: unset;
        border-bottom: 1px solid var(--footer-gray);
      }
    }
    @media screen and (max-width: 1200px) {
      justify-content: center;
      flex-direction: column;
    }
  }
  &__copyrights {
    font-weight: 400;
    font-size: 13px;
    color: var(--white);
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  &-payment {
    display: flex;
    justify-content: space-between;
    max-width: 395px;
    width: 100%;
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      & span {
        font-weight: 400;
        font-size: 13px;
        color: var(--footer-gray);
      }
    }
  }

  &-contacts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 306px;
    width: 100%;
    &__item {
      & a {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 400;
        font-size: 13px;
        color: var(--footer-gray);
        &:hover {
          color: var(--white);
        }
      }
    }
  }
}
</style>
