<template>
  <main class="flex-auto p-8 bg-gray-2">
    <ul>
      <job-listing
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      ></job-listing>
    </ul>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "./JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:3000/jobs");
      // console.log(res.data);
      this.jobs = res.data;
    } catch (e) {
      console.log("An error occurred");
    }
    // console.log("Express running through");
  },
};
</script>

<style></style>
