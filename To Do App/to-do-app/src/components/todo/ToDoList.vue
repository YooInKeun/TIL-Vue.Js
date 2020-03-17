<template>
  <div>
    <div v-for="(todo, index) in todos" :key="index">
      <ul>
        <li><h2>할 일 {{ index }} 번</h2></li>
       <h3>제목: {{ todo.title }}</h3>
       <h3>{{ todo.content }}</h3>
      </ul>
      <br>
    </div>
    <button>등록</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      todos: [
        {
          id: 1,
          title: "운동",
          content: "수영하기"
        },
        {
          id: 2,
          title: "공부",
          content: "수학"
        },
        {
          id: 3,
          title: "여가 생활",
          content: "보드"
        },
        {
          id: 4,
          title: "장 보기",
          content: "고기"
        }
      ]
    }
  },
    created: function () {
      this.fetch_all_data();
  },
  methods: {
    fetch_all_data: function () {
      // 데이터를 받았다고 가정
    },
  },
}
</script>

<style scoped>

</style>
