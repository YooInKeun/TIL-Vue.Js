<template>
  <div>
    <div>
        <h1>VueX 데이터 전달</h1>
        Vuex Parent counter : {{ $store.state.counter }} <br>
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>
        <vuex-child></vuex-child>
    </div>
  </div>
</template>

<script>
import VuexChild from './VuexChild.vue'

export default {
  components: {
    vuexChild: VuexChild
  },
  name: 'VuexParent',
  data () {
    return {
    }
  },
  methods: {
    addCounter () {
      this.$store.state.counter++
    },
    subCounter () {
      this.$store.state.counter--
    }
  }
}
</script>

<style scoped>

</style>
