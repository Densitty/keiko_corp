<template>
  <h1>This is an about page</h1>
  <button @click="() => $router.push({ name: 'Home' })">Go Home</button>
  <h2>{{ myRoute }}</h2>
</template>

<script>
export default {
  name: "JobResultsView",
  computed: {
    myRoute() {
      console.log(this.$router);
      return "Hello";
    },
  },
};
</script>
