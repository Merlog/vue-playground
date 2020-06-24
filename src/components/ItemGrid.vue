<template>
  <div class="row">
    <app-item v-for="(item, index) in items" :key="index"
      >{{ item }}
      <span
        ><md-icon class="iconBox delete" @click.native="deleteItem(index)"
          >delete</md-icon
        ></span
      >
      <!-- <span
        ><md-icon class="iconBox  edit" 
          >edit</md-icon
        ></span
      > -->
    </app-item>
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

<style>
.iconBox {
  border: solid 1px #dadada;
  display: inline;
  width: 25px;
  height: 25px;
  border-radius: 5px;
}
</style>
