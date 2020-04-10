<template>
  <div class="axios">
    <h1>Component Axios 테스트</h1>
    <button @click="selectUser">API 호출</button>
    <div>
      콘솔을 확인하세요
    </div>
    <div v-for="(user, index) in users" :key="index">
      아이디: {{ user.user_id }}
      이름: {{ user.user_name }}
      나이: {{ user.age }}
      전화번호: {{ user.tel }}
    </div>
  </div>
</template>

<script>
import API from "../../api/index.js";

export default {
  components: {},
  data() {
    return {
      users: [],
      conditions: {
        user_id: "",
        user_name: "",
        age: "",
        tel: "",
        start_dt: "",
        end_dt: "",
        pageNum: 1,
        pageCon: 10,
        userSortDirection: "ASC",
        userSortItem: "user_seq",
        view_cnt: ""
      }
    }
  },
  computed: {},
  methods: {
    async selectUser() {
      try {
        const response = await API().selectUser(this.conditions);
        this.users = response.data.data.rows;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.axios {
  // background-color: pink;
}
</style>
