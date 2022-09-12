import { mount } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  it("shows a company logo", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.get("img").attributes().src).toBe("keiko_corp.svg");
    expect(wrapper.get("img").attributes().alt).toMatch("Keiko Corp");

    const imageTag = wrapper.findAll("img").at(0).attributes();
    expect(imageTag.src).toMatch("keiko_corp.svg");
  });

  it("expects logo to link to a homepage", () => {
    const wrapper = mount(MainNav);

    expect(wrapper.get("a").attributes().href).toBe("/");
  });

  it("display menu navigation items", () => {
    const wrapper = mount(MainNav);

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
      const wrapper = mount(MainNav);

      const loginBtn = wrapper.find("[data-test='action-button'");

      expect(loginBtn.exists()).toBe(true);
    });
  });

  describe("when a user is authenticated", () => {
    it("shows a profile image", async () => {
      const wrapper = mount(MainNav);
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
});
