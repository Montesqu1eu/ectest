<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <router-link :to="{ name: 'main' }" class="header__logo">
          <span class="white">LoremIpsum.</span>
          <span class="blue">Net</span>
        </router-link>
        <nav class="header__nav header-nav">
          <ul class="header-nav__list">
            <li class="header-nav__item" v-for="item in links" :key="item">
              <router-link
                :to="{ name: item.link }"
                class="header-nav__link"
                @click.prevent="scroll(item)"
                >{{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
const links = [
  {
    title: "Бизнес",
    link: "main",
    hash: "",
  },
  {
    title: "О нас",
    link: "main",
    hash: "",
  },
  {
    title: "Цены",
    link: "main",
    hash: "",
  },
  {
    title: "Оформить заказ",
    link: "main",
    hash: "#order",
    id: "order",
  },
];

export default {
  name: "HeaderRegion",
  data() {
    return {
      links,
    };
  },
  methods: {
    scroll(item) {
      this.$router.push({ name: item.name });
      if (item.hash) {
        document.getElementById(item.id).scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  background-color: var(--header-bg);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0;
    gap: 10px;
    @media screen and (max-width: 1200px) {
      padding: 32px 10px;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 768px) {
      padding: 20px 10px;
    }
  }

  &__logo {
    font-weight: 800;
    font-size: 28px;
    text-transform: uppercase;

    & .white {
      color: var(--white);
      transition: 0.3s;
    }

    & .blue {
      color: var(--logo-blue);
    }

    &:hover {
      & .white {
        color: var(--logo-blue);
      }
    }
  }

  &-nav {
    max-width: 435px;
    width: 100%;

    &__list {
      display: flex;
      justify-content: space-between;
    }

    &__link {
      color: var(--white);
      font-weight: 600;
      font-size: 13px;

      &:hover {
        color: var(--nav-blue);
      }
    }
  }
}
</style>
