<template>
  <div>
    <div>
        <h1>Props 데이터 전달</h1>
        Parent counter : {{ counter }} <br>
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>
        <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
        <child v-bind:num="counter"></child>
    </div>
  </div>
</template>

<script>
import Child from './VuexChild.vue'

export default {
  components: {
    child: Child
  },
  name: 'Parent',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    addCounter () {
      this.counter++
    },
    subCounter () {
      this.counter--
    }
  }
}
</script>

<style scoped>

</style>
