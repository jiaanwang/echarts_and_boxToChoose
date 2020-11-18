import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
