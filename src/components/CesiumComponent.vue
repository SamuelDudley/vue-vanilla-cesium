<template>
    <div style="width: 100vw; height:100vh" id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Widgets/widgets.css'
// import { Cesium } from 'cesium/Cesium'
var Cesium = require('cesium/Cesium')
// import { Observable } from 'rxjs'
export default {
  data: function () {
      return {
          viewer: {},
      }
  },
  mounted() {
    var viewer = new Cesium.Viewer('cesiumContainer', {
        animation: false,
        fullscreenButton: false,
        baseLayerPicker: false,
        geocoder: false,
        infoBox: false,
        timeline: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false,
        scene3DOnly: true,
        homeButton: false,
        shadows: true
    })
    this.viewer = viewer
  }
}
</script>

