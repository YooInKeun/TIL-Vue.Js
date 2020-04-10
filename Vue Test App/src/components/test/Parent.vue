<template>
  <div class="parent">
    <h1>부모 컴포넌트</h1>
    <h2>자식으로부터 받은 데이터: {{ childData.from }} {{ childData.to }}</h2>
    <child v-on:child="fromChildToParent"></child>
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  components: {
    Child
  },
  data() {
    return {
      childData: {
        from: "",
        to: ""
      }
    }
  },
  computed: {},
  methods: {
    fromChildToParent(childData) {
      alert("자식 컴포넌트 이벤트 발생");
      this.childData = childData;
    }
  }
};
</script>

<style lang="scss" scoped>
.parent {
  background-color: cornflowerblue;
}
</style>
