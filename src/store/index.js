import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
  },
  mutations: {
    setAuth(state, payload) {
      state.auth = payload;
    },
    logout(state) {
      state.auth = false;
    },
  },
  actions: {},
  modules: {},
});
