<script lang="ts">
import { defineComponent, computed } from "vue";
import DiscussionPreview from "./DiscussionPreview.vue";

const discussions = [
  {
    id: 1,
    author: "Velit placeat sit ducimus non sed",
    title: "Discussion title 1",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  // More discussions...
];

export default defineComponent({
  setup() {
    return {
      discussions,
    };
  },
  data() {
    return {
      previewIsOpen: false
    }
  },
  components: {
    DiscussionPreview,
  },
  methods: {
    togglePreview() {
      this.previewIsOpen = !this.previewIsOpen
    },
    closePreview() {
      this.previewIsOpen = false
    }
  }
});
</script>

<template>
  <ul role="list" class="divide-y divide-gray-200">
    <DiscussionListItem
      v-for="discussion in discussions"
      :key="discussion.id"
      :discussion="discussion"
    />
    <DiscussionPreview :isOpen="previewIsOpen" @closePreview='closePreview'/>
  </ul>
</template>
