<template>
  <div>
    <h2 v-bind:title="message">
      마우스를 올리면 잠시 후에 메세지가 보입니다!
    </h2>
    <h2 v-if="seen" @mouseover="disableSeen" @mouseleave="enableSeen">
      마우스를 올리면 메세지가 사라집니다!
    </h2>
  </div>
</template>

<script>
export default {
  name: "Tutorial",
  data: () => {
    return {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다!',
      seen: true
    };
  },
  methods: {
    enableSeen() {
      this.seen = true;
    },
    disableSeen() {
      this.seen = false;
    }
  }
}
</script>

<style scoped>

</style>