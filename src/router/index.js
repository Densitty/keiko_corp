import { createRouter, createWebHashHistory } from "vue-router";

/* =lazy load the components= */
const HomeView = () => import("@/views/HomeView.vue");
const JobResults = () =>
  import(/* webpackCHunkName: "jobs" */ "@/views/JobResultsView.vue");
const JobPage = () =>
  import(/* webpackCHunkName: "jobs" */ "@/views/JobView.vue");
/* ========================== */

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    { path: "/jobs/results", name: "JobResults", component: JobResults },
    { path: "/jobs/results/:id", name: "JobPage", component: JobPage },
  ],
});

export default router;
