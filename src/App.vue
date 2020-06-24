<template>
  <div id="app">
    <the-header></the-header>
    <h1>{{ msg }}</h1>
    <new-item @createItem="newItem"></new-item>
    <item-grid :items="todostore" @delete-item="deleteItem"></item-grid>
    <hr />
    <h2>Router</h2>

    <app-header></app-header>
    <hr />
    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
import theHeader from "./components/TheHeader.vue";
import itemGrid from "./components/ItemGrid.vue";
import newItem from "./components/NewItem.vue";
import Header from "./components/Header.vue";
import store from "./store";

export default {
  name: "app",
  store,
  data() {
    return {
      msg: "todo list",
    };
  },
  methods: {
    newItem(item) {
      store.state.todostore.push(item);
      // store.commit("newItem");
    },

    deleteItem(index) {
      store.state.todostore.splice(index, 1);
      // store.commit("deleteItem", index);
    },
  },
  computed: {
    count() {
      return store.state.count;
    },
    todostore() {
      return store.state.todostore;
    },
  },
  components: {
    theHeader,
    itemGrid,
    newItem,
    appHeader: Header,
  },
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  padding: 40px;
}
</style>
