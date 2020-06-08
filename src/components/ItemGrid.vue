<template>
  <div class="row">
    <app-item
      v-for="(item, index) in items"
      @click.native="deleteItem(index)"
      :key="index"
      >{{ item }}</app-item
    >
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    appItem: Item,
  },
  methods: {
    deleteItem(index) {
      this.$emit("delete-item", index);
    },
  },
};
</script>

<style></style>
