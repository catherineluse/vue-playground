<script>
import { defineComponent, PropType } from "vue";
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
<li
      class="
        relative
        bg-white
        py-5
        px-4
        hover:bg-gray-50
        focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600
      "
    >
      <div @click="togglePreview" class="flex justify-between space-x-3">
        <div class="min-w-0 flex-1">
          <a href="#" class="block focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ discussion.title }}
            </p>
            <p class="text-sm font-medium text-gray-500 truncate">
              {{ discussion.author }}
            </p>
          </a>
        </div>
        <time
          :datetime="discussion.datetime"
          class="
            flex-shrink-0
            whitespace-nowrap
            font-medium
            text-sm text-gray-500
          "
          >{{ discussion.time }}</time
        >
      </div>
      <div class="mt-1">
        <p class="line-clamp-2 text-sm font-medium text-gray-600">
          {{ discussion.preview }}
        </p>
      </div>
    </li>
</template>