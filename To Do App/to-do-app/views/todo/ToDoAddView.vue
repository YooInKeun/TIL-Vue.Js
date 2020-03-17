<template>
  <div class="container">
    <page-header>
      <template slot="title">To Do Add</template>
    </page-header>
    <to-do-add></to-do-add>
  </div>
</template>

<script>
import PageHeader from "../../src/components/common/PageHeader.vue";
import ToDoAdd from "../../src/components/todo/ToDoAdd.vue";

export default {
  components: {
    PageHeader,
    ToDoAdd
  }
};
</script>