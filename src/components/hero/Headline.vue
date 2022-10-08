<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-test="action-word"
    >
      <span :class="headlineClasses">{{ actionWord }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Keiko Corp</h2>
  </section>
</template>

<script>
import getNextItemInAList from "@/utils/getNextItemInAList";

export default {
  name: "Headline",
  data() {
    return {
      actionWord: "Innovate",
      interval: null,
    };
  },
  computed: {
    headlineClasses() {
      return {
        /* innovate: this.action === "Innovate",
        design: this.action === "Design",
        engineer: this.action === "Engineer",
        create: this.action === "Create", */
        [this.actionWord.toLocaleLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeAction();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeAction() {
      this.interval = setInterval(() => {
        const headlines = ["Innovate", "Design", "Engineer", "Create"];

        this.actionWord = getNextItemInAList(headlines, this.actionWord);
      }, 5000);
    },
  },
};
</script>

<style scoped>
.innovate {
  color: #1a73e8;
}

.design {
  color: #34a853;
}

.engineer {
  color: #f9ab00;
}

.create {
  color: #d93025;
}
</style>
