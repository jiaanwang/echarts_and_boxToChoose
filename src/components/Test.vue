<template>
  <div >
    <!-- <h2>hello</h2> -->
    <div id="main"></div>
    <h2>hello</h2>
    <div id="main1"></div>
  </div>
</template>
<script>
export default {
  name: "Test",
  mounted() {
      this.drawLine();
      this.drawLine1();
  },
  data() {
    return {};
  },
  methods: {
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    drawLine1() {
        var myChart = this.$echarts.init(document.getElementById('main1'));
        myChart.setOption({
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
                    ]
                }
            ]
        })
    }
  },
};
</script lang="less" scoped>
<style>
#main {
    width: 600px;
    height: 300px;
}
#main1 {
    width: 500px;
    height: 300px;
}
</style>