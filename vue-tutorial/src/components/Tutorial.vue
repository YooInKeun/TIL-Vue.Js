<template>
  <div>
    <h2 v-bind:title="timestampMessage">
      마우스를 올리면 잠시 후에 메세지가 보입니다!
    </h2>
    <h2 v-if="seen" @mouseover="disableSeen" @mouseleave="enableSeen">
      마우스를 올리면 메세지가 사라집니다!
    </h2>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
    <h2>{{ message }}</h2>
    <button @click="reverseMessage">메세지 뒤집기</button>
    <br/>
    <input v-model="message">
  </div>
</template>

<script>
export default {
  name: "Tutorial",
  data: () => {
    return {
      timestampMessage: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다!',
      seen: true,
      todos: [
        { id: 1, text: '@mouseleave가 왜 안 먹히지?' },
        { id: 2, text: 'vue 문법 한 cycle 돌기' },
        { id: 3, text: '졸린데 오늘은 이만 잘까?' }
      ],
      message: '버튼을 클릭하면 메세지가 뒤집어집니다!'
    };
  },
  methods: {
    enableSeen() {
      this.seen = true;
    },
    disableSeen() {
      this.seen = false;
    },
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>