<template>
  <HeroRegion />
  <OrderRegion />
</template>

<script>
import HeroRegion from "@/components/HeroRegion";
import OrderRegion from "@/components/OrderRegion";

export default {
  name: "MainPage",
  components: { OrderRegion, HeroRegion },
};
</script>
