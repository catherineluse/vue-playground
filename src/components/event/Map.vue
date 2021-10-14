<script lang="ts">
import { defineComponent } from "vue";
import places from "../../testData/places";

export default defineComponent({
  setup() {
    return {
      center: { lat: 33.4255, lng: -111.94 },
      places,
    };
  },
});
</script>

<template>
  <div>Map</div>
  <div>
    <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 50rem"
    >
      <GMapCluster
        :zoomOnClick="true"
      >
        <GMapMarker
          v-for="place in places"
          :key="place.Name"
          :position="{ lat: place.Latitude, lng: place.Longitude }"
          :clickable="true"
          :draggable="true"
          @click="center = { lat: place.Latitude, lng: place.Longitude }"
        >
          <GMapInfoWindow>
            {{ place.Name }}
          </GMapInfoWindow>
        </GMapMarker>
      </GMapCluster>
    </GMapMap>
  </div>
</template>