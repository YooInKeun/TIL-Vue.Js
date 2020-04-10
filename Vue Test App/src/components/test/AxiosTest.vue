<template>
  <div class="axios">
    <h1>Component Axios 테스트</h1>
    <button @click="selectUser">API 호출</button>
    <div>
      콘솔을 확인하세요
    </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = 'http://anylogic.iptime.org:8580/';

export default {
  components: {},
  data() {
    return {
      users: []
    }
  },
  computed: {},
  methods: {
    selectUser() {
      var tmpCondition =
        "?age=&end_dt=&pageCon=10&pageNum=1&start_dt=&tel=&userSortDirection=ASC&userSortItem=user_seq&user_id=&user_name=&view_cnt=";
      axios
        .get("chunjae/user/selectUser/" + tmpCondition)
        .then(response => {
          console.log("GET RES", response);
          this.users = response.data.data.rows;
        })
        .catch(error => {
          console.log("GET ERR", error);
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.axios {
  // background-color: pink;
}
</style>
