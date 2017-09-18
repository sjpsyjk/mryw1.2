import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ArticleSave: false,
    aa: 'aa'
  },
  getters: {
    toUp (state) {
      return state.aa.toUpperCase()
    }
  },
  // 同步
  mutations: {
    changeSave (state) {
      state.articleSave = !state.articleSave
    }
  },
  // 异步
  actions: {
    changeSave (state) {
      state.articleSave = !state.articleSave
    }
  }
})
