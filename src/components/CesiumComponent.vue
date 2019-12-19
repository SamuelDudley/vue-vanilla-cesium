<template>
    <v-container>
        <div id="cesiumContainer"></div>
    </v-container>
</template>

<script>
import Cesium from 'cesium/Cesium'
export default {
  data () {
      return {
          viewer:{},
      }
  },
  mounted() {
      console.log(Cesium)
      var viewer = new cesium.Viewer('cesiumContainer')
      this.viewer = viewer
  }
}
</script>