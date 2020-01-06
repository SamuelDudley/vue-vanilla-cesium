import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],

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
  },

  modules: {
  }
})
