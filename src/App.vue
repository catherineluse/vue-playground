<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Topnav from "./components/Topnav.vue";
import SiteSidenav from "./components/SiteSidenav.vue";
import CommunitySidenav from "./components/community/CommunitySidenav.vue";
import CommunityContent from "./components/community/CommunityContent.vue";



</script>

<template>
  <div className="App">
    <div class="relative min-h-screen md:flex">
      <Topnav />
      <SiteSidenav />

      <div class="flex-1 p-10 text-xl font-bold">
        <div class="grid grid-cols-12">
          <CommunitySidenav />
          <CommunityContent />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  color: gray;
}
</style>
