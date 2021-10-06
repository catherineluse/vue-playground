<script lang="ts">
import { defineComponent, computed } from "vue";
import Breadcrumbs from "../Breadcrumbs.vue";
import SearchDiscussions from "./SearchDiscussions.vue";

export default defineComponent({
  setup() {
  },
  components: {
    Breadcrumbs,
    SearchDiscussions,
  },
});
</script>

<template>
  <div>
    <div class="flex-1 px-10">
      <h2
        class="
          inline
          text-3xl
          mt-6
          mb-2
          font-extrabold
          tracking-tight
          text-gray-900
          sm:block sm:text-4xl
          text-xl font-bold
        "
      >
        Discussions
      </h2>
      <SearchDiscussions />
    </div>
  </div>
</template>
