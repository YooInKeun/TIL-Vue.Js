<template>
  <div class="infinite-scroll">
    <h1>Infinite Scroll 테스트</h1>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="(user, index) in users" :key="index">
        아이디: {{ user.user_id }}
        <br />
        이름: {{ user.user_name }}
        <br />
        나이: {{ user.age }}
        <br />
        전화번호: {{ user.tel }}
      </div>
    </div>
  </div>
</template>

<script>
// import API from "../../api/index.js";
import { userAPI } from "../../api/userAPI.js";

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
      },
      busy: false
    }
  },
  computed: {},
  methods: {
    async loadMore() {
      this.busy = true;
      try {
        let response = await userAPI.userAPI("selectUser", this.conditions);
        this.users.push(...response.data.data.rows);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      this.busy = false;
      this.conditions.pageNum++;
      if (this.conditions.pageNum > 3) {
        this.conditions.pageNum = 1;
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
