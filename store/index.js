import Vuex from "vuex";
import contentStore from "./admin/ContentStore.js";

const createStore = () => {
  return new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      contentStore
    },

  })
}


export default createStore;
