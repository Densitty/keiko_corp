<template>
  <img :src="src" class="w-8 h-8 rounded-3xl object-contain cursor-pointer" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      src: "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
    };
  },
};
</script>
