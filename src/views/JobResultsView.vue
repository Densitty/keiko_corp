<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar></job-filters-sidebar>
    <job-listings></job-listings>
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/job_results/jobs_filter_sidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/job_results/JobListings.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>
