<template>
  <div class="container">
    <page-header>
      <template slot="title">To Do List</template>
    </page-header>
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import PageHeader from "../../src/components/common/PageHeader.vue";
import ToDoList from "../../src/components/todo/ToDoList.vue";

export default {
  components: {
    PageHeader,
    ToDoList
  }
};
</script>