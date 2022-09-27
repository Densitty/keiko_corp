<template>
  <li class="mb-7">
    <router-link
      to="/jobs/results/10"
      class="block mx-auto bg-white border border-solid border-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-gray-2">
        <h2 class="mb-2 text-2xl">Frontend Developer</h2>
        <div class="flex items-center">
          <span class="mr-5">Keiko Corp</span>
          <span>Lagos, Nigeria</span>
        </div>
        <!-- <div class="mr-5">
              <span>Keiko Corp</span>
            </div>

            <div>
              <span>Lagos, Nigeria</span>
            </div> -->
      </div>

      <div class="px-8 py-4">
        <article>
          <h3 class="mt-1 mb-2">Qualifications</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li>Bachelor's degree or equivalent experience</li>
              <li>
                2 years of experience as a frontend developer in an e-commerce
                company
              </li>
              <li>
                Experience with JavaScript framework like React or Vue is very
                essential
              </li>
            </ul>
          </div>
        </article>

        <div class="mt-2 text-center">
          <router-link to="/jobs/results/10" class="text-blue-1">
            Expand
          </router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
};
</script>
