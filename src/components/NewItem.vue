<template>
  <div class="row form">
    <form>
      <div
        class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
      >
        <textarea class="form-control" rows="3" v-model="item"></textarea>
      </div>
      <div
        class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
      >
        <button class="btn btn-primary" @click.prevent="createNew(item)">
          Add Item what TO DO
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import store from "./../store";

export default {
  store: store,
  data() {
    return {
      item: "",
    };
  },
  methods: {
    createNew(item) {
      store.commit("newItem", item);
      this.item = "";
    },
  },
};
</script>

<style scoped>
.form {
  margin-bottom: 40px;
}
</style>
