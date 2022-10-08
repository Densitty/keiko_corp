import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Headline from "@/components/hero/Headline.vue";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays first action as introduction", () => {
    const wrapper = mount(Headline);
    const actionWord = wrapper.find("[data-test='action-word']");
    expect(actionWord.text()).toBe("Innovate for everyone");
  });

  it("changes action word at an interval", () => {
    // mount the component so as to call the setInterval function, which is being mocked by jest.fn, when the component is created
    mount(Headline);
    // by the time component is created, the jest.fn mocked (which is setInterval) must have been called
    expect(setInterval).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it("swaps action word after the first interval", async () => {
    const wrapper = mount(Headline);
    // simulate the running of the time
    jest.runOnlyPendingTimers();
    console.log(wrapper.vm.actionWord);
    // update the DOM, although the JS data (actionWord) has changed
    await nextTick();

    const actionWord = wrapper.find("[data-test='action-word']");
    expect(actionWord.text()).toBe("Design for everyone");

    jest.useRealTimers();
  });

  it("tears down interval when components is removed from DOM", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });

  /* describe("Jest playground", () => {
    it("tracks whether jest has been called", () => {
      const mockFunction = jest.fn();
      mockFunction();
      expect(mockFunction).toHaveBeenCalled();
      
      jest.useFakeTimers("legacy");
      console.log(clearInterval);
      jest.useRealTimers();
      console.log(clearInterval);
    });
  }); */
});
