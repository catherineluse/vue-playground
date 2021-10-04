<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import EventList from "./EventList.vue";
import AddToFeed from "../buttons/AddToFeed.vue"

export default defineComponent({
  setup() {
    const route = useRoute();

    const channelId = computed(() => {
      return route.params.channelId;
    });

    return {
      channelId
    }
  },
  components: {
    EventList,
    AddToFeed
  },
});
</script>

<template>
  <div class="flex-1 text-xl font-bold">
    <AddToFeed v-if="channelId"/>
    <EventList />
  </div>
</template>
