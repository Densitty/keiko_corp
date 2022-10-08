import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/job_results/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => {
    return {
      title: "Frontend Developer",
      organization: "Keiko Finance",
      ...jobProps,
    };
  };

  const createConfig = (jobPropsCreated) => {
    return {
      props: {
        job: {
          ...jobPropsCreated,
        },
      },
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    };
  };

  it("renders job title", () => {
    const jobProps = createJobProps();
    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("Frontend Developer");
  });

  it("renders company name", () => {
    const jobProps = createJobProps({ organization: "Keiko Finance" });
    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("Keiko Finance");
  });

  it("renders location for the job", () => {
    const jobProps = createJobProps({ locations: ["Pretoria", "New York"] });
    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("Pretoria");
    expect(wrapper.text()).toMatch("New York");
  });

  it("renders job qualificaton", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["BSc", "Finance Role"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("BSc");
    expect(wrapper.text()).toMatch("Finance Role");
  });

  it("links to a specific job page when the specific job is clicked", () => {
    const jobProps = createJobProps({ id: 2 });
    const wrapper = mount(JobListing, createConfig(jobProps));

    // to get the route-link component for testing
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const linkToProp = jobPageLink.props("to");

    expect(linkToProp).toMatch("/jobs/results/2");
  });
});
