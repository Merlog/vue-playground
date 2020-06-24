<template>
  <div class="row theHeader">
    "THE HEADER" smaze vsechno !!!
    <button class="btn btn-primary" @click.prevent="deleteAll">
      Delete All Items
    </button>
  </div>
</template>

<script>
import store from "./../store";

export default {
  store,
  methods: {
    deleteAll() {
      store.commit("deleteAll");
    },
  },
};
</script>

<style>
.theHeader {
  border: solid 1px red;
  height: 50px;
}
</style>
