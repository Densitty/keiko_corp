import { mount } from "@vue/test-utils";
import ProfileImage from "@/components/global/profile/ProfileImage.vue";

describe("ProfileImage", () => {
  it("shows profile image when logged in", () => {
    const wrapper = mount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
