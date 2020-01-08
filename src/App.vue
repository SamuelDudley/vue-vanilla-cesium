<template>
  <v-app>
    <v-fade-transition></v-fade-transition>
    <v-content class="mx-0 px-0 my-0 py-0">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
  components: { },
  data: function () {
    return {
    }
  },
  methods: {
    isNotLogin() {
      return false
    }
  }
});
</script>