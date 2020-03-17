<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    created: function () {
      this.fetch_all_data();
  },
  methods: {
      fetch_all_data: function () {

          var json = {
              params: {
                  col_int: 239
              }
          };

          axios.get('http://192.168.0.86:8580//chunjae/typecheck/oracle', json)
              .then((res) => {
                  console.log("GET SUCESS", res);
                  result = JSON.parse(res.data.data);
                  console.log(result);

                  for (key in result) {
                      console.log('key : ' + key + ' / ' + 'type : ' + typeof(result[key]) + ' / ' + 'value:' + result[key]);
                  };
              })
              .catch((err) => {
                  console.log("GET FAIL", err);
              });
        },
    },
}
</script>

<style scoped>

</style>
