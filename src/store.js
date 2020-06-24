import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todostore: [
      "testuju todostore prvni",
      "co dal druhej",
      "test treti",
      "mozna ctvrtej ???",
    ],
  },
  mutations: {
    // newItem(item) {
    //   console.log(item, "newitem mutations", this.state.todostore);
    //   this.state.todostore.push(item);
    // },
    // deleteItem(index) {
    //   this.state.todostore.splice(index, 1);
    // },
    deleteAll: (state) => (state.todostore = []),
  },
});

export default store;
