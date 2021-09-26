<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from 'vue-router';

export default defineComponent({
  name: "CommunitySidenav",
  setup() {
    const route = useRoute();

    const communityUrl = computed(() => {
      return route.params.communityUrl
    })

    return { 
      route,
      communityUrl
    }
  },
});
</script>

<template>
  <div class="col-span-12 lg:col-span-3">
    <div class="sidebar text-blue-800">
      <nav>
        <router-link
          :to="`/c/${communityUrl}/overview`"
          class="block rounded hover:bg-blue-700 hover:text-white"
          active-class="bg-blue-700 text-white"
        >
          Overview
        </router-link>
        <router-link
          :to="`/c/${communityUrl}/events`"
          class="block rounded hover:bg-blue-700 hover:text-white"
          active-class="bg-blue-700 text-white"
        >
          Events
        </router-link>
        <router-link
          :to="`/c/${communityUrl}/discussions`"
          class="block rounded hover:bg-blue-700 hover:text-white"
          active-class="bg-blue-700 text-white"
        >
          Discussions
        </router-link>
      </nav>
    </div>
  </div>
</template>
