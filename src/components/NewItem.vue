<template>
  <div class="row form">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <textarea class="form-control" rows="3" v-model="item"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Add Item what TO DO</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      item: ""
    };
  },
  methods: {
    createNew() {
      this.$emit("itemAdded", this.item);
      this.item = "";
    }
  }
};
</script>

<style>
.form {
  margin-bottom: 40px;
}
</style>
