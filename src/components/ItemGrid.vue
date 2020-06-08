<template>
  <div class="row">
    <app-item v-for="(item, index) in items" @click.native="deleteItem(index)">{{ item }}</app-item>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  props: ["items"],
  components: {
    appItem: Item
  },
  methods: {
    deleteItem(index) {
      this.$emit("itemDeleted", index);
    }
  }
};
</script>

<style>
</style>
