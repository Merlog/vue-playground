<template>
  <div class="row">
    <app-item v-for="(item, index) in todostore" :key="index"
      >{{ item }}
      <span
        ><md-icon class="iconBox delete" @click.native="deleteItem(index)"
          >delete</md-icon
        ></span
      >
      <span
        ><md-icon class="iconBox edit" @click.native="editItem(index)"
          >edit</md-icon
        ></span
      >
      <div v-if="edited === index">
        <hr />
        <!-- 2 tady bych potreboval dostat item do default value toho inputu-->
        <input
          type="text"
          class="form-control"
          style="display:inline;width:auto"
          v-model="newValue"
        />
        <span
          ><md-icon class="iconBox done" @click.native="confirmItem(index)"
            >done</md-icon
          ></span
        >
      </div>
    </app-item>
  </div>
</template>

<script>
import Item from "./Item.vue";
import store from "./../store";

export default {
  store: store,
  components: {
    appItem: Item,
  },
  data: function() {
    return {
      edited: "",
      newValue: "",
    };
  },
  methods: {
    deleteItem(index) {
      store.commit("deleteItem", index);
    },
    editItem(index) {
      this.edited = index;
    },
    confirmItem(index) {
      console.log("editedItem", index, this.newValue); // 1a tady jeste newValue odchayi jako string
      store.commit("editedItem", index, this.newValue);
      this.newValue = "";
    },
  },
  computed: {
    todostore() {
      return store.state.todostore;
    },
  },
};
</script>

<style>
.iconBox {
  border: solid 1px #dadada;
  display: inline;
  width: 25px;
  height: 25px;
  border-radius: 5px;
}
</style>
