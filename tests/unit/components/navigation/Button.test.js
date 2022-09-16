import Button from "@/components/global/button/Button.vue";
import { mount } from "@vue/test-utils";

describe("Button", () => {
  it("renders text", () => {
    const wrapper = mount(Button, {
      props: {
        title: "This is a button",
        type: "primary",
      },
    });

    expect(wrapper.text()).toMatch("This is a button");
  });

  it("applies either primary or secondary class style", () => {
    const wrapper = mount(Button, {
      type: "primary",
      title: "This is a button",
    });

    const btn = wrapper.find("button");
    expect(btn.classes("primary")).toBe(true);
  });
});
