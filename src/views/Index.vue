<template>
  <v-container fill-height fluid class="mx-0 px-0 my-0 py-0">
        <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item v-for="(waypoint, index) in waypoints" :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="waypoint.latitude.toFixed(6) + ', ' + waypoint.longitude.toFixed(6)"></v-list-item-title>
            <v-list-item-subtitle v-text="waypoint.id"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <!-- // eslint vue/valid-v-on -->
            <v-btn @click="deleteWaypoint(waypoint)" icon>
              <v-icon color="grey lighten-1">delete_forever</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <keep-alive>
      <CesiumComponent style ="display:inline-block;"/>
    </keep-alive>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CesiumComponent from '@/components/CesiumComponent'
import { CesiumEvent, CesiumEventType } from '@/store/modules/cesiumStore'
  export default {
    components: { CesiumComponent },
    data: () => ({
      drawer: null,
    }),
    computed: {
      ...mapGetters('mission', ['waypoints'])
    },
    methods: {
      deleteWaypoint: function(waypoint) {
        this.$store.commit('mission/removeWaypointById', waypoint.id)
        /** @type CesiumEvent */
        let cesiumEvent = {
          eventType: CesiumEventType.zoomToLocation,
          payload: {
            latitude: waypoint.latitude,
            longitude: waypoint.longitude
          }
        }
        this.$store.commit('cesiumStore/publishEvent', cesiumEvent)
      }
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>