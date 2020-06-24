import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todostore: [
      "testuju todostore prvni",
      "co dal... druhej",
      "test treti",
      "mozna ctvrtej ???",
    ],
  },
  plugins: [createPersistedState()],
  mutations: {
    newItem: (state, item) => state.todostore.push(item),
    deleteItem: (state, index) => state.todostore.splice(index, 1),
    deleteAll: (state) => (state.todostore = []),
  },
});

export default store;
