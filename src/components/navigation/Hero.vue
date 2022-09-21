<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-orange-400">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border-2 border-red-700">
          this takes 1 column
        </div>

        <div class="col-start-2 col-span-5 border-2 border-red-700">
          <headline></headline>
        </div>

        <div class="col-start-7 col-span-5 border-2 border-blue-700">
          Doing this
        </div>

        <div class="col-start-12 col-span-1 border-2 border-blue-700">
          Lesson
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "./hero_internals/Headline.vue";

export default {
  name: "Hero",
  components: {
    Headline,
  },
};
</script>

<style></style>
