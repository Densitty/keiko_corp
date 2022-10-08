<template>
  <div>Job Page</div>
  {{ jobID }}
</template>

<script>
export default {
  name: "JobView",
  computed: {
    jobID() {
      return this.$route.params.id;
    },
  },
};
</script>
