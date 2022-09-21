import { shallowMount } from "@vue/test-utils";
import Subnav from "@/components/navigation/Subnav.vue";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("displays number of jobs", () => {
      const wrapper = shallowMount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true, // replace ds component with something else cos it's not needed for test
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on job page", () => {
    it("does not display job count", () => {
      const wrapper = shallowMount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
