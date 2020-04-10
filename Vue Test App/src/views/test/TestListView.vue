<template>
  <div>
    <parent> </parent>
    <br><br><br>
    <axios-test> </axios-test>
  </div>
</template>

<script>
import Parent from "../../components/test/Parent.vue";
import AxiosTest from "../../components/test/AxiosTest.vue";

export default {
  components: {
    Parent,
    AxiosTest
  },
  data() {
    return {}
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
