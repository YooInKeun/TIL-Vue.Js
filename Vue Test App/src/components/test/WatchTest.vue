<template>
  <div class="watch">
    <h1>Watch 테스트</h1>
    <button @click="addToDo">추가하기</button>
    <div>
      콘솔을 확인하세요
    </div>
    <div v-for="(todo, index) in todos" :key="index">
      제목: {{ todo.title }}
      <br>
      내용: {{ todo.content }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      todos: [
        {
          title: "공부",
          content: "Vue.js"
        }
      ]
    }
  },
  computed: {},
  watch: {
    todos: function(){
      console.log("todo 변화 감지");
    }
  },
  methods: {
    addToDo() {
      var tmpTodo = {
        title: "운동",
        content: "축구"
      };
      this.todos.push(tmpTodo);
    }
  }
};
</script>

<style lang="scss" scoped>
.watch {
//   background-color: orange;
}
</style>
