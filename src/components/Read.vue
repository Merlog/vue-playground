<template>
  <div>
    <h1>Read</h1>

    <button @click="navigateToCreatePage" class="btn btn-primary">
      Go to Create
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToCreatePage() {
      this.$router.push("/");
    },
  },
};
</script>
