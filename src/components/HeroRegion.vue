<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">
          <span class="blue">Lorem ipsum</span> dolor sit <br />amet consectetur
          <span class="blue">adipiscing</span>
        </h1>
        <h6 class="hero__description">
          At vero eos et accusamus et iusto odio dignissimos ducimus!
        </h6>
        <ul class="hero__list">
          <li class="hero__item">Totam rem aperiam eaque ipsa</li>
          <li class="hero__item">
            Sit voluptatem accusantium doloremque laudantium
          </li>
          <li class="hero__item">
            Sed ut perspiciatis, unde omnis iste natus error
          </li>
        </ul>
        <div class="hero__actions">
          <main-button kind="blue">заказать</main-button>
          <main-button kind="white">подробнее</main-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroRegion",
};
</script>

<style lang="scss">
.hero {
  background: url("~@/assets/hero-bg.png") no-repeat;
  background-size: cover;

  &__content {
    padding: 200px 0;
    @media screen and (max-width: 1200px) {
      padding: 200px 10px;
    }
    @media screen and (max-width: 768px) {
      padding: 150px 10px;
    }
  }

  &__title {
    margin-bottom: 80px;
    max-width: 780px;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    & .blue {
      color: var(--blue);
    }
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
  }

  &__description {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 20px;
    color: var(--black);
  }

  &__list {
    margin-bottom: 80px;
  }

  &__item {
    display: block;
    margin-bottom: 5px;
    font-size: 20px;
    color: var(--black);
    &:before {
      display: inline-block;
      content: "-";
      padding: 0 10px;
    }
  }
  &__actions {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 30px;
  }
}
</style>
