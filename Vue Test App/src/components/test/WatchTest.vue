<template>
  <div class="watch">
    <h1>Watch 테스트</h1>
    <button @click="addToDo" class="component">this component</button>
    <button @click="addComputedVuexToDo" class="computed-vuex">computed vuex</button>
    <button v-on:click="increaseCount">Count Increase</button>
    <div>
      콘솔을 확인하세요
    </div>
    <br />
    <!-- this component data-->
    <div v-for="(todo, index) in todos" :key="index" class="component">
      제목: {{ todo.title }}
      <br />
      내용: {{ todo.content }}
    </div>
    <!-- computed vuex data -->
    <div v-for="(computedVuexTodo, index) in computedVuexTodos" :key="index" class="computed-vuex">
      제목: {{ computedVuexTodo.title }}
      <br />
      내용: {{ computedVuexTodo.content }}
    </div>
    {{ counter }}
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
      ],
      counter: 0
    }
  },
  computed: {
    computedVuexTodos() {
      return this.$store.state.todos;
    }
  },
  watch: {
    // this component watch
    todos() {
      console.log("this component todos 변화 감지");
    },
    // computed된 vuex state watch
    computedVuexTodos: function() {
      console.log("computed된 vuex state todos 변화 감지");
      console.log(this.computedVuexTodos);
    },
    // newVal, oldVal check
    counter(newVal, oldVal) {
      console.log('newVal : ' + newVal);
      console.log('oldVal : ' + oldVal);
      return 10000;
    }
  },
  methods: {
    addToDo() {
      var tmpTodo = {
        title: "운동",
        content: "축구"
      };
      this.todos.push(tmpTodo);
    },
    addComputedVuexToDo() {
      var tmpTodo = {
        title: "운동",
        content: "축구"
      };
      this.$store.state.todos.push(tmpTodo);
    },
    increaseCount() {
        console.log(this.counter);
      this.counter++;
    },
  }
};
</script>

<style lang="scss" scoped>
.watch {
//   background-color: orange;
}

.component {
  color: crimson;
}

.computed-vuex {
  color: blue;
}
</style>
