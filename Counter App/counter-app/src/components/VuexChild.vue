<template>
  <div>
    <hr>
    Vuex Child counter : {{ $store.state.counter }} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  name: 'VuexChild',
  data () {
    return {
    }
  },
}
</script>

<style scoped>

</style>
