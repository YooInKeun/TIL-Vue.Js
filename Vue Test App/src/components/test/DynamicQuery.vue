<template>
  <div class="query">
    <h1>Dnynamic Query 테스트</h1>
    <button @click="selectItem">Dynamic Query API 호출</button>
  </div>
</template>

<script>
import { userAPI } from "../../api/userAPI.js";

export default {
  components: {},
  data() {
    return {
      queryInfo: [
        {
          name: "selectUser",
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
        },
        {
          name: "selectUserOne",
          conditions: {
            user_seq: 690
          }
        },
        {
          name: "updateUser",
          conditions: {
            formData: [
              {
                address: "1000",
                reg_no: "1000",
                listFile: [],
                user_id: "Userid10001",
                contents: "1000",
                user_name: "Username1000",
                cnt: 89,
                user_seq: 1096,
                create_dt: "2020-04-01 15:54:17",
                tel: "1000",
                age: 100088,
                del_yn: "N",
                listDelFile: [],
                newAddFile: []
              }
            ]
          }
        },
      ]
    }
  },
  computed: {},
  methods: {
    async selectItem() {
      for (var i = 0; i < this.queryInfo.length; i++) {
        try {
          let response = await userAPI.userAPI(
            this.queryInfo[i].name,
            this.queryInfo[i].conditions
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.parent {
  background-color: cornflowerblue;
}
</style>
