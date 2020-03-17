<template>
  <div>
    <div class="container">
        *제 목: <input type="text" v-model="title"><br><br>
        *내 용: <input type="text" v-model="content"> 
    </div>
    <br>
    <button @click="addToDo()">수정 완료</button>
    <router-link to="/todo/list">메인 페이지</router-link>
  </div>
</template>

<script>
export default {
  name: 'toDoUpdate',
  data () {
    return {
        title: null,
        content: null
    }
  },
  created: function () {
      this.title = this.$route.query.todo_id;
  },
  methods: {
      addToDo() {
          console.log(this.title);
          console.log(this.content);
          // 통신 부분
          
          alert("수정 완료 되었습니다");
          this.title = null;
          this.content = null;
          
          this.$router.push({
            name: "toDoList"
          });
      }
  },
}
</script>

<style scoped>

</style>
