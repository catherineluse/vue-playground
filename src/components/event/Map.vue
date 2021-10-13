<script lang="ts">
import { computed, defineComponent } from "vue";
import { useGeolocation } from "./useGeolocation";
import { GoogleMap, Marker } from "vue3-google-map";
import config from "../../config";
import { Point } from "../../types/eventTypes";
import places from "../../testData/places";

const GOOGLE_MAPS_API_KEY: string = config.googleMapsApiKey as string;

export default defineComponent({
  setup() {
    const { coords } = useGeolocation();
    const currentPosition = computed(
      () =>
        ({
          lat: coords.value.latitude,
          lng: coords.value.longitude,
        } as Point)
    );
    return {
      currentPosition,
      center: { lat: 33.4255, lng: -111.94 },
      GOOGLE_MAPS_API_KEY,
      places,
    };
  },
  components: {
    GoogleMap,
    Marker,
  },
});
</script>

<template>
  <div>Map</div>
  <div>
    <p>Your position:</p>
    <p>Latitude: {{ currentPosition.lat }}</p>
    <p>Longitude: {{ currentPosition.lng }}</p>
    <GoogleMap
      :api-key="GOOGLE_MAPS_API_KEY"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker
        v-for="place in places"
        :key="place.Name"
        :options="{ position: { lat: place.Latitude, lng: place.Longitude } }"
      />
    </GoogleMap>
  </div>
</template>