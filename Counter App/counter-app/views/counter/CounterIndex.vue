<template>
  <div class="container">
    <parent></parent>
    <br>
    <br>
    <vuex-parent></vuex-parent>
  </div>
</template>

<script>
import Parent from '../../src/components/Parent.vue'
import VuexParent from '../../src/components/VuexParent.vue'

export default {
  components: {
    Parent,
    VuexParent
  }
}
</script>
