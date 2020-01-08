import Vue from 'vue'
import Vuex from 'vuex'
import { missionPlugin } from '@/store/plugins/mission.plugin'

Vue.use(Vuex)

interface waypoint {
  latitude: number,
  longitude: number,
  altitude: number,
  id: string
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [ missionPlugin ],
  state: {
    user: {
      bearer: ''
    }
  },
  mutations: {
    bearer (state, payload) {
      state.user.bearer = payload
    }
  },
  actions: {
    bearer (context, payload) {
      context.commit('bearer', payload)
    }
  },
  getters: {
    bearer: state => {
      return state.user.bearer
    }
  }
})
