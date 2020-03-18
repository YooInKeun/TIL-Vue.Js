<template>
  <div>
    <div v-if="drawer"> 이제 나를 볼 수 있어요 </div> <div v-else> 이제는 안보입니다 </div>
    <div v-for="(todo, index) in todos" :key="index">
      <ul>
        <li><h2>할 일 {{ index }} 번</h2></li>
        <h3>제목: {{ todo.title }}</h3>
        <h3>내용: {{ todo.content }}</h3>
        <h5>Reversed Title(computed): {{ reversedTitle(todo.title) }}</h5><br>
        
        <input v-model="message">
        <h5 v-model="message">Message : {{ message }}</h5>
        <h5>Reversed Content(watch): {{ reversedMessage }}</h5>

      </ul>
      <button @click="moveToToDoUpdate(todo)">수정</button>
      <br>
    </div>
    <router-link to="/todo/add">등록</router-link>
  </div>

</template>

<script>
export default {
  name: 'toDoList',
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
      ],
      message: '안녕하세요',
      reversedMessage: '',
      drawer: true
    }
  },
  watch: {
    message: function (message) {
      this.reversedMessage = message.split('').reverse().join('')
    }
  },
  computed: {
    reversedTitle() {
      return (title) => {
        return title.split('').reverse().join('');
      } 
    }
  },
  created: function () {
    this.fetch_all_data();

    this.$EventBus.$on('click-icon', () => { 
      this.drawer = !this.drawer; 
    });
  },
  methods: {
    fetch_all_data: function () {
      // 데이터를 받았다고 가정
    },
    moveToToDoUpdate(todo) {
      this.$router.push({
        name: "toDoUpdate",
        param: {
          todo: todo
        },
        query: {
          todo_id: todo.id
        }
      })
    }
  },
}
</script>

<style scoped>
</style>
