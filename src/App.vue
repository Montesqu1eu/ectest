<template>
  <HeaderRegion />
  <main class="main">
    <router-view />
  </main>
  <FooterRegion />
</template>

<script>
import HeaderRegion from "@/components/HeaderRegion";
import FooterRegion from "@/components/FooterRegion";

export default {
  components: { HeaderRegion, FooterRegion },
};
</script>

<style lang="scss">
@import "styles/base";
</style>
