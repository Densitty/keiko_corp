<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-gray-3 rounded-3xl"
    data-test="form-submit"
    @submit.prevent="searchJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <!-- declarative approach -->
        <!-- <text-input
          type="text"
          placeholder="city"
          :form-value="job_type"
          @form-input="getJobType"
        ></text-input> -->
        <text-input
          v-model="job_type"
          placeholder="job type"
          data-test="job-type-input"
        ></text-input>
      </div>
      <span
        class="flex items-center h-full px-3 border-x border-gray-3 bg-gray-2"
        >in</span
      >
      <div class="flex relative items-center flex-1 h-full pl-3">
        <label for="role" class="absolute left-0 -top-10">Location?</label>
        <!-- <input
          v-model="location"
          type="text"
          placeholder="city"
          class="w-full text-lg font-normal focus:outline-none"
        /> -->
        <text-input
          v-model="location"
          type="text"
          placeholder="city"
          data-test="location-input"
        ></text-input>
      </div>
    </div>

    <action-button
      title="Search"
      type="secondary"
      class="rounded-r-3xl"
    ></action-button>
  </form>
</template>

<script>
import ActionButton from "@/components/global/form/Button.vue";
import TextInput from "@/components/global/form/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      job_type: "",
      location: "",
    };
  },
  methods: {
    getJobType(value) {
      this.job_type = value;
    },
    getLocation(value) {
      this.location = value;
    },
    searchJobs() {
      const query = {
        job_type: this.job_type,
        location: this.location,
      };
      this.$router.push({ name: "JobResults", query });
    },
  },
};
</script>

<style></style>
