import { mount } from "@vue/test-utils";
import TextInput from "@/components/global/form/TextInput.vue";

describe("TextInput", () => {
  it("communicates entered characters out", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });

    const input = wrapper.find("input");
    // console.log(wrapper.emitted())
    input.setValue("L");
    input.setValue("Lo");
    input.setValue("Lon");
    // input.setValue("Lond");
    // input.setValue("Londo");
    // input.setValue("London");
    console.log(wrapper.emitted());
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["L"], ["Lo"], ["Lon"]]);
  });
});
