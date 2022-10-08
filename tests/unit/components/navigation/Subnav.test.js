import { shallowMount } from "@vue/test-utils";
import Subnav from "@/components/navigation/Subnav.vue";

describe("Subnav", () => {
  const createConfig = (routeName) => {
    return {
      global: {
        mocks: {
          $route: {
            name: routeName,
          },
        },
        stubs: {
          FontAwesomeIcon: true, // replace ds component with something else cos it's not needed for test
        },
      },
    };
  };
  describe("when user is on job page", () => {
    it("displays number of jobs", () => {
      // mimic the route object to get the name ppty
      const routeName = "JobResults";

      const wrapper = shallowMount(Subnav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on job page", () => {
    it("does not display job count", () => {
      const routeName = "Home";

      const wrapper = shallowMount(Subnav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
