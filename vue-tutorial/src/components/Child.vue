<template>
  <div>
    <h2>Child Counter: {{ num }}</h2>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ['num']
}
</script>

<style scoped>

</style>