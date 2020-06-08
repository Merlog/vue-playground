<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-new-item @itemAdded="newItem"></app-new-item>
    <app-item-grid :items="items" @itemDeleted="deleteItem"></app-item-grid>
  </div>
</template>

<script>
import ItemGrid from "./components/ItemGrid.vue";
import NewItem from "./components/NewItem.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "todo list",
      items: ["Sell a car"]
    };
  },
  methods: {
    newItem(item) {
      this.items.push(item);
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  },
  components: {
    appItemGrid: ItemGrid,
    appNewItem: NewItem
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  padding: 40px;
}

h1,
h2 {
  font-weight: normal;
}
</style>
