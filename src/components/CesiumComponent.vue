<template>
    <div style="width: 100vw; height:100vh" id="cesiumContainer"></div>
</template>

<script>
import { cesiumStore, CesiumEvent, CesiumEventType } from '@/store/modules/cesiumStore'

import 'cesium/Build/Cesium/Widgets/widgets.css'
import { BingMapsApi, ScreenSpaceEventType, Cartographic, ScreenSpaceEventHandler, Viewer} from "cesium"
import { Math, BingMapsImageryProvider, createWorldTerrain, Cartesian3, Matrix4, Transforms } from "cesium"
import { PolylineCollection, Color, Material } from "cesium"

export default {
  data: function () {
      return {
      }
  },
  methods: {
    getById(collection, idToMatch) {
      for (let i = 0; i < collection.length; i += 1) {
        const obj = collection.get(i)
        if (idToMatch === obj.id) {
          return obj
        }
      }
      // object with supplied id could not be found in the collection
      return null
    },

    registerMouseMovement() {
      this.mouseMovementHandler = new ScreenSpaceEventHandler(this.mainScene.canvas)
      this.mouseMovementHandler.setInputAction((movement) => {
        const cartesian = this.mainViewer.camera.pickEllipsoid(movement.endPosition, this.mainScene.globe.ellipsoid)
        if (cartesian) {
          const cartographic = Cartographic.fromCartesian(cartesian)
          this.mousePosition = {
            latitude: Math.toDegrees(cartographic.longitude),
            longitude: Math.toDegrees(cartographic.latitude)
          }
        } else {
          this.mousePosition = undefined
        }
      }, ScreenSpaceEventType.MOUSE_MOVE)
    },

    registerMouseDoubleLeftClick() {
      this.mouseDoubleLeftClickHandler = new ScreenSpaceEventHandler(this.mainScene.canvas)
      // eslint-disable-next-line no-unused-vars
      this.mouseDoubleLeftClickHandler.setInputAction((e) => {
        // Disable the default dbl click to track entity for the viewer
        this.mainViewer.trackedEntity = undefined;
      }, ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
    },

    registerMouseLeftClick() {
      this.mouseLeftClickHandler = new ScreenSpaceEventHandler(this.mainScene.canvas)
      // eslint-disable-next-line no-unused-vars
      this.mouseLeftClickHandler.setInputAction((event) => {
        if (this.mousePosition) {
          let waypoint = this.mousePosition
          waypoint.id = (+new Date).toString(36).slice(-5)
          this.$store.commit('mission/appendWaypoint', waypoint)
        }
      }, ScreenSpaceEventType.LEFT_CLICK)
    },

    setMainCamera(location, heading = 0, pitch = -45, roll = 0) {
      this.mainCamera.setView({
      destination: location,
      orientation: {
        heading: Math.toRadians(heading),
        pitch: Math.toRadians(pitch),
        roll: Math.toRadians(roll),
        },
      })
    }
  },
  created () {
    this.$store.registerModule('cesiumStore', cesiumStore)
    BingMapsApi.defaultKey = 'Anbo9M1xfooZZAvpxP6qtbApJzMrvT_BtBAnJUDE-4fvRHfAzHH2APKQXI5oqH5C';
  },
  mounted() {
    const viewer = new Viewer('cesiumContainer', {
      imageryProvider: new BingMapsImageryProvider({
        url: 'https://dev.virtualearth.net',
      }),
      terrainProvider : new createWorldTerrain({
        requestWaterMask : true,
        requestVertexNormals : true
      }),
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
      shadows: true,
      requestRenderMode: true,
      maximumRenderTimeChange: Infinity,
    })

    this.mousePosition = undefined
    this.mainViewer = viewer
    this.mainScene = this.mainViewer.scene
    this.mainCamera = this.mainScene.camera
    this.registerMouseMovement()
    this.registerMouseLeftClick()
    this.registerMouseDoubleLeftClick()
    this.mainScene.debugShowFramesPerSecond = process.env.NODE_ENV !== 'production' ? true : false

    this.watcherEventUnwatch = this.$store.watch(
      () => this.$store.getters['cesiumStore/getEvent'], cesiumEvent => {
        switch(cesiumEvent.eventType) {
          case CesiumEventType.zoomToLocation: {
            let cameraLocation = Transforms.northEastDownToFixedFrame(
              Cartesian3.fromDegrees(
                cesiumEvent.payload.latitude,
                cesiumEvent.payload.longitude,
                30000
              )
            )
            let cameraOffset = new Cartesian3(0, 0, 0)
            this.setMainCamera(Matrix4.multiplyByPoint(cameraLocation, cameraOffset, new Cartesian3()), 0, -90, 0)
            break
          }
        }
      }
    )

    this.watcherWaypointsUnwatch = this.$store.watch(
      () => this.$store.getters['mission/waypointLLAs'], newValue => {
        let line = this.getById(this.missionLines, 'missionLine')
        if (line) {
          line.positions = Cartesian3.fromDegreesArray(newValue)
          // Explicitly render a new frame
          this.mainScene.requestRender()
        }
      }
    )

    const startingCameraLocation = Transforms.northEastDownToFixedFrame(
      Cartesian3.fromDegrees(
        148.08254681308492,
        -36.27293618323337,
        30000
      )
    )
    const startingCameraOffset = new Cartesian3(0, 0, 0)
    this.setMainCamera(Matrix4.multiplyByPoint(startingCameraLocation, startingCameraOffset, new Cartesian3()))

    this.missionLines = this.mainViewer.scene.primitives.add(new PolylineCollection())

    this.missionLines.add({
      id: 'missionLine',
      show: true,
      positions: this.$store.getters['mission/waypointLLAs'],
      width: 2,
      material: Material.fromType('Color', {
        color: Color.STEELBLUE,
      }),
    })

    // Explicitly render a new frame
    this.mainScene.requestRender()
  },
  beforeDestroy() {
    this.watcherWaypointsUnwatch()
    this.watcherEventUnwatch()
    this.$store.unregisterModule('cesiumStore')
  }
}
</script>

