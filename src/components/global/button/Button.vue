<template>
  <button :class="btnPrimary" class="btn">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    title: {
      type: String,
      default: "Sign In",
      required: true,
    },
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    btnPrimary() {
      return {
        // primary: this.type === "primary",
        // secondary: this.type === "secondary",
        [this.type]: true,
      };
    },
  },
  methods: {},
};
</script>

<style scoped>
.btn {
  @apply px-5 py-3 font-medium rounded;
}

.primary {
  @apply bg-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply text-blue-1 hover:text-white bg-transparent hover:bg-blue-2;
}
</style>
