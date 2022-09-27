<template>
  <main class="flex-auto p-8 bg-gray-2">
    <ul>
      <job-listing></job-listing>
      <job-listing></job-listing>
      <job-listing></job-listing>
      <job-listing></job-listing>
      <job-listing></job-listing>
    </ul>
  </main>
</template>

<script>
import JobListing from "./JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
};
</script>

<style></style>
