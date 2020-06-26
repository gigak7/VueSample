import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Foo from '../components/foo/foo.vue'
import Bar from '../components/bar/bar.vue'
import List from '../components/list/list.vue'

var routes = [
  {
    name:'heroes',
    path:'/heroes',
    component: List
  },
  {
    name:'foo',
    path:'/foo',
    component: Foo
  },
  {
    name:'bar',
    path:'/bar',
    component: Bar
  }
]
var router = new VueRouter({
  routes
})

export default router;