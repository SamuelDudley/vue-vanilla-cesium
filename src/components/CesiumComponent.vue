<template>
    <div style="width: 100vw; height:100vh" id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Widgets/widgets.css'
// import { Cesium } from 'cesium/Cesium'
var Cesium = require('cesium/Cesium')
import { messageService } from '@/services'

export default {
  data: function () {
      return {
          viewer: {},
          messages: [],
      }
  },
  methods: {
    logMessage() {
      console.log("this is a message")
    }
  },
  created () {
      // subscribe to home component messages
      this.subscription = messageService.getMessage().subscribe(message => {
          if (message) {
            this.logMessage();
            // add message to local state if not empty
            this.messages.push(message);
          } else {
              // clear messages when empty message received
              this.messages = [];
          }
      });
  },
  mounted() {
    const viewer = new Cesium.Viewer('cesiumContainer', {
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
  },
  beforeDestroy () {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
</script>

