<template>
  <div>
    <parent> </parent>
    <br /><br /><br />
    <axios-test> </axios-test>
    <br /><br /><br />
    <watch-test> </watch-test>
    <br /><br /><br />
    <dynamic-query> </dynamic-query>
    <br /><br /><br />
    <infinite-scroll> </infinite-scroll>
  </div>
</template>

<script>
import Parent from "../../components/test/Parent.vue";
import AxiosTest from "../../components/test/AxiosTest.vue";
import WatchTest from "../../components/test/WatchTest.vue";
import DynamicQuery from "../../components/test/DynamicQuery.vue";
import InfiniteScroll from "../../components/test/InfiniteScroll.vue";

export default {
  components: {
    Parent,
    AxiosTest,
    WatchTest,
    DynamicQuery,
    InfiniteScroll
  },
  data() {
    return {}
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
