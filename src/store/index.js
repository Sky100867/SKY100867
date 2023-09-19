import { createStore } from 'vuex'
import vuex from "vuex-persistedstate"
export default createStore({
  plugins:[vuex()],
  state: {
    type:""
  },
  getters: {
  },
  mutations: {
    add(state,type){
      state.type=type
    }
  },
  actions: {
  },
  modules: {
  }
})
