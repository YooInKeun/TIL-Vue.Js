<template>
  <div>
    <parent> </parent>
    <br /><br /><br />
    <axios-test> </axios-test>
    <br /><br /><br />
    <watch-test> </watch-test>
    <br /><br /><br />
    <dynamic-query> </dynamic-query>
  </div>
</template>

<script>
import Parent from "../../components/test/Parent.vue";
import AxiosTest from "../../components/test/AxiosTest.vue";
import WatchTest from "../../components/test/WatchTest.vue";
import DynamicQuery from "../../components/test/DynamicQuery.vue";

export default {
  components: {
    Parent,
    AxiosTest,
    WatchTest,
    DynamicQuery
  },
  data() {
    return {}
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
