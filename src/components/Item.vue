<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.panel-body {
  font-size: 24px;
  color: #6e6e6e;
}

.item {
  cursor: pointer;
}

.item:hover .delete {
  background-color: #ffe2e2;
}

.item:hover .edit {
  background-color: #e2efff;
}
.item:hover .done {
  background-color: #e2ffee;
}
</style>
