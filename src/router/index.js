import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/components/Home'
import MixinDemo from '@/components/MixinDemo'
import ComponentDemo from '@/components/ComponentDemo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'mixin',
        name: 'MixinDemo',
        component: MixinDemo
      },
      {
        path: 'component',
        name: 'ComponentDemo',
        component: ComponentDemo
      },
    ]
  }, ]
})
