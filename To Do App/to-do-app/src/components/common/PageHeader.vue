<template>
  <div>
    <h1>
      <slot name="title"></slot>
    </h1>
    <button v-on:click="$EventBus.$emit('click-icon')">이벤트 버스 버튼</button>
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