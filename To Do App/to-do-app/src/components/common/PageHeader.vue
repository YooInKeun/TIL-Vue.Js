<template>
  <div>
    <h1>
      <slot name="title"></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

#title{
    float: right;
}

</style>