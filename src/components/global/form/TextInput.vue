<template>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />

  <!-- declarative approach of emitting event -->
  <!-- <input
    :type="type"
    :value="formValue"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  /> -->
</template>

<script>
export default {
  name: "TextInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
    // formValue: {
    //   type: String,
    //   required: true,
    // },
  },
  emits: ["update:modelValue" /* "form-input" */],
  data() {
    return {};
  },
  methods: {
    // imperative approach
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
    // declarative approach
    // handleInputDeclarative($event) {
    //   this.$emit("form-input", $event.target.value);
    // },
  },
};
</script>

<style></style>
