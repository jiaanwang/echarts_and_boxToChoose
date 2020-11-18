import Vue from 'vue'
import Router from 'vue-router'
import Test from './components/Test'
import Test1 from './components/Test1'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/test1'
    },
    {
      path: '/test1',
      name: 'test1',
      component: Test1
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
