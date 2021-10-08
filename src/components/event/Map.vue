<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useGeolocation } from './useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
import config from '../../config'

const GOOGLE_MAPS_API_KEY: string = config.googleMapsApiKey as string;

export default {
  setup() {
    const { coords } = useGeolocation()
    const currentPosition = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref()

    onMounted(async () => {
      await loader.load()
      new google.maps.Map(mapDiv.value, {
        center: currentPosition.value,
        zoom: 7
      })
    })

    return {
      currentPosition, mapDiv
    }
  },
  data() {
    return {
      center: { lat: 33.4255, lng: 111.9400 },
    };
  },
};
</script>

<template>
  <div>Map</div>
  <div>
    <p>Your position:</p>
    <p>Latitude: {{ currentPosition.lat }}</p>
    <p>Longitude: {{ currentPosition.lng }}</p>
    <div
      ref="mapDiv"
      style="width: 100%; height: 80vh"
    ></div>
  </div>
</template>