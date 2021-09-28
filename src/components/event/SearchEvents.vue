<script lang="ts">
import { defineComponent } from "vue";
import EventList from "./EventList.vue";

export default defineComponent({
  setup() {},
  components: {
    EventList,
  },
});
</script>

<template>
  <div class="flex-1 text-xl font-bold">
    <EventList />
  </div>
</template>
