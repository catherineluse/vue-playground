<script lang="ts">
import { defineComponent, computed } from "vue";
import Breadcrumbs from "../Breadcrumbs.vue";
import SearchEvents from "./SearchEvents.vue";

export default defineComponent({
  setup() {},
  components: {
    Breadcrumbs,
    SearchEvents,
  },
});
</script>

<template>
  <div class="flex-1 text-xl font-bold">
    <h2
      class="
        px-10
        inline
        text-3xl
        mt-12
        mb-2
        font-extrabold
        tracking-tight
        text-gray-900
        sm:block
        sm:text-4xl
      "
    >
      Events
    </h2>
    <SearchEvents />
  </div>
</template>