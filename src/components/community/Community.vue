<script lang="ts">
import CommunitySidenav from "./CommunitySidenav.vue";
import Breadcrumbs from "../Breadcrumbs.vue";
import { useRoute } from 'vue-router';
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const route = useRoute();

    const communityUrl = computed(() => {
      return route.params.communityUrl
    })
    return {
      communityUrl
    }
  },
  components: {
    CommunitySidenav,
    Breadcrumbs,
  },
});
</script>

<template>
  <div class="flex-1 p-10 text-xl font-bold">
    <Breadcrumbs />
    <h2 class="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
      {{ communityUrl }}
    </h2>
    <div class="grid grid-cols-12">
      <CommunitySidenav />
      <router-view></router-view>
    </div>
  </div>
</template>
