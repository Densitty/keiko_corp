import { mount } from "@vue/test-utils";
import JobSearchForm from "@/components/hero/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("navigates to the jobs result page", async () => {
      // mock the this.$router method in our test environment
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      // job type input
      const job_type_input = wrapper.find("[data-test='job-type-input']");
      await job_type_input.setValue("Frontend Developer");

      // location input
      const location_input = wrapper.find("[data-test='location-input']");
      await location_input.setValue("Ibadan");

      // submit btn
      const submit = wrapper.find("[data-test='form-submit']");

      // mimic submit btn
      await submit.trigger("submit");

      // assert that the push method on the $router has been called
      const query = {
        job_type: "Frontend Developer",
        location: "Ibadan",
      };

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query,
      });
    });
  });
});
