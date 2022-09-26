<template>
  <header class="w-full text-sm" :class="navHeightClass">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-gray-1"
      >
        <div class="w-40 h-full">
          <router-link
            :to="{ name: 'Home' }"
            class="flex items-center justify-center h-full"
          >
            <img
              class="logo w-full h-full"
              :src="company.img"
              :alt="company.name"
            />
          </router-link>
        </div>

        <nav class="h-full ml-auto">
          <ul class="flex h-full list-none p-0 m-0">
            <li
              v-for="link in links"
              :key="link.id"
              class="h-full ml-4 first:ml-0"
              data-test="main-nav-links"
            >
              <router-link :to="link.url" class="flex items-center py-5">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <action-button
            v-if="!isLoggedIn"
            data-test="action-button"
            :title="title"
            type="primary"
            @click="loginUser"
          />
          <profile-image v-else data-test="profile-image" @click="logoutUser" />
        </div>
      </div>
      <subnav v-if="isLoggedIn" data-test="subnav"></subnav>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/global/form/Button.vue";
import ProfileImage from "@/components/global/profile/ProfileImage.vue";
import Subnav from "@/components/navigation/Subnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      company: {
        name: "Keiko Corp",
        img: "keiko_corp.svg",
      },
      links: [
        { id: 1, name: "Teams", url: "/" },
        { id: 2, name: "Locations", url: "/" },
        { id: 3, name: `Life at Keiko Corp`, url: "/" },
        { id: 4, name: "Hiring Process", url: "/" },
        { id: 5, name: "Internships", url: "/" },
        { id: 6, name: "Jobs", url: "/jobs/results" },
      ],
      isLoggedIn: false,
      title: "Sign in",
    };
  },
  computed: {
    navHeightClass() {
      return { "h-32": this.isLoggedIn, "h-16": !this.isLoggedIn };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
    logoutUser() {
      this.isLoggedIn = false;
    },
  },
};
</script>
