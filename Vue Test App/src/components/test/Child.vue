<template>
  <div class="child">
    <h1>자식 컴포넌트</h1>
    <button @click="fromChildToParent">Emit(자식 -> 부모)</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      childData: {
        from: "child",
        to: "parent"
      }
    }
  },
  computed: {},
  methods: {
    fromChildToParent() {
      this.$emit("child", this.childData);
    }
  }
};
</script>

<style lang="scss" scoped>
.child {
  background-color: cyan;
}
</style>
