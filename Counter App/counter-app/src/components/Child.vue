<template>
  <div>
    <hr>
    Child counter : {{ num }} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {

    }
  },
  // 상위 컴포넌트에서 내려준 counter 속성을 num로 받음
  props: ["num"]
}
</script>

<style scoped>

</style>
