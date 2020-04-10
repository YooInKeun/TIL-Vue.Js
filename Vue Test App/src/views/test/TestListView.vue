<template>
  <div>
    <parent> </parent>
    <br /><br /><br />
    <axios-test> </axios-test>
    <br /><br /><br />
    <watch-test> </watch-test>
  </div>
</template>

<script>
import Parent from "../../components/test/Parent.vue";
import AxiosTest from "../../components/test/AxiosTest.vue";
import WatchTest from "../../components/test/WatchTest.vue";

export default {
  components: {
    Parent,
    AxiosTest,
    WatchTest
  },
  data() {
    return {}
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
