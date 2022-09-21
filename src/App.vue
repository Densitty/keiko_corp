<template>
  <div>
    <main-nav></main-nav>
    <hero />
  </div>
</template>

<script>
import Hero from "@/components/navigation/Hero.vue";
import MainNav from "@/components/navigation/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
