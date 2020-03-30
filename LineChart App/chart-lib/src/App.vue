<template>
  <div id="app">
    <h1>Chart.js</h1>
    <bar-chart v-on:refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      // chartDataSet: [],
    }
  },
  methods: {
    // refreshChart() {
    //   this.chartDataSet = [10, 20];
    // }
  },
  // 비즈니스 로직은 최대한 상위 컴포넌트에서 사용
  // 하위 컴포넌트는 상위 컴포넌트에서 받은 데이터를 받아오기만 하게끔
  created() {
    // axios.get('charts/line/1')
    //   .then(response => this.chartDataSet = response.data)
    //   .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
