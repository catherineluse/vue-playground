<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<template>
  <div class="col-span-12 lg:col-span-3">
    <div class="sidebar text-blue-800">
      <nav>
        <a
          href="#"
          class="px-2 m-2 block rounded hover:bg-blue-700 hover:text-white"
        >
          Home
        </a>
        <a
          href=""
          class="block rounded px-2 m-2 hover:bg-blue-700 hover:text-white"
        >
          About
        </a>
        <a
          href=""
          class="block rounded px-2 m-2 hover:bg-blue-700 hover:text-white"
        >
          Features
        </a>
        <a
          href=""
          class="block rounded px-2 m-2 hover:bg-blue-700 hover:text-white"
        >
          Pricing
        </a>
      </nav>
    </div>
  </div>
</template>
