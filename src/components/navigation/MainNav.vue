<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-gray-1 justify-between"
      >
        <div class="w-40 h-full">
          <a
            :href="company.url"
            class="flex items-center justify-center h-full"
          >
            <img
              class="logo w-full h-full"
              :src="company.img"
              :alt="company.name"
            />
          </a>
        </div>

        <nav class="h-full">
          <ul class="flex h-full list-none p-0 m-0">
            <li
              v-for="link in links"
              :key="link.id"
              class="h-full ml-4 first:ml-0"
              data-test="main-nav-links"
            >
              <a href="#" class="flex items-center py-5">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: {
        name: "Keiko Corp",
        img: "keiko_corp.svg",
        url: "/",
      },
      links: [
        { id: 1, name: "Teams" },
        { id: 2, name: "Locations" },
        { id: 3, name: `Life at Keiko Corp` },
        { id: 4, name: "Hiring Process" },
        { id: 5, name: "Internships" },
        { id: 6, name: "Jobs" },
      ],
    };
  },
};
</script>
