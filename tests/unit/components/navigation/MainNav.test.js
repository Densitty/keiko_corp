import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = () => {
    return {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    };
  };

  it("shows a company logo", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    expect(wrapper.get("img").attributes().src).toBe("keiko_corp.svg");
    expect(wrapper.get("img").attributes().alt).toMatch("Keiko Corp");

    const imageTag = wrapper.findAll("img").at(0).attributes();
    expect(imageTag.src).toMatch("keiko_corp.svg");
  });

  it("display menu navigation items", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    const navItems = wrapper.findAll("[data-test='main-nav-links']");

    const navItemTexts = navItems.map((item) => item.text());

    expect(navItemTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Keiko Corp",
      "Hiring Process",
      "Internships",
      "Jobs",
    ]);
  });

  describe("when a user is not authenticated", () => {
    it("shows a sign-in button", () => {
      const wrapper = shallowMount(MainNav, createConfig());
      const loginBtn = wrapper.find("[data-test='action-button'");

      expect(loginBtn.exists()).toBe(true);
    });
  });

  describe("when a user is authenticated", () => {
    it("shows a profile image", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      let loginBtn = wrapper.find("[data-test='action-button'");
      await loginBtn.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);

      loginBtn = wrapper.find("[data-test='action-button'");
      expect(loginBtn.exists()).toBe(false);
    });
  });

  it("displays subnav with additional information", async () => {
    const wrapper = shallowMount(MainNav, createConfig());
    let subnav = wrapper.find("[data-test='subnav']");

    expect(subnav.exists()).toBe(false);

    let loginBtn = wrapper.find("[data-test='action-button'");
    await loginBtn.trigger("click");
    loginBtn = wrapper.find("[data-test='action-button'");

    subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(true);
  });
});
