<script lang="ts">
import ChannelSidenav from "./ChannelSidenav.vue";
import ChannelContent from "./ChannelContent.vue";
import Breadcrumbs from "../Breadcrumbs.vue";
import { useRoute } from "vue-router";
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const route = useRoute();

    const channelId = computed(() => {
      return route.params.channelId;
    });

    const links = computed(() => {
      return [
        {
          label: "Channels",
          path: "channels",
        },
        {
          label: `/c/${route.params.channelId}`,
          path: `c/${route.params.channelId}`,
        },
      ];
    });
    return {
      channelId,
      links,
    };
  },
  components: {
    ChannelSidenav,
    ChannelContent,
    Breadcrumbs,
  },
});
</script>

<template>
  <div class="flex-1 p-10 font-bold">
    <Breadcrumbs :links="links" />
    <h2
      class="
        inline
        text-3xl
        mt-6
        mb-3
        ml-2
        font-extrabold
        tracking-tight
        text-gray-900
        sm:block sm:text-4xl
      "
    >
      {{ channelId }}
    </h2>
    <div class="grid grid-cols-12 lg:space-x-4">
      <div class="col-span-12 lg:col-span-3">
        <ChannelSidenav />
      </div>
      <div class="col-span-12 lg:col-span-9">
        <ChannelContent />
      </div>
    </div>
  </div>
</template>
