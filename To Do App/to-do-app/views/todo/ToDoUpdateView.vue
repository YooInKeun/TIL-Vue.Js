<template>
  <div class="container">
    <page-header>
      <template slot="title">To Do Update</template>
    </page-header>
    <to-do-update></to-do-update>
  </div>
</template>

<script>
import PageHeader from "../../src/components/common/PageHeader.vue";
import ToDoUpdate from "../../src/components/todo/ToDoUpdate.vue";

export default {
  components: {
    PageHeader,
    ToDoUpdate
  }
};
</script>