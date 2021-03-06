import Vue from "vue";
import VueRouter from "vue-router";
import Order from './components/Order.vue'
import Shop from './components/Shop.vue'
import Comments from './components/Comments.vue'

Vue.use(VueRouter)
const routes=[
    {
      component:Order,
      path:"/"
    },
    {
      component:Order,
      path:"/order"
    },
    {
      component:Shop,
      path:"/shop"
    },
    {
      component:Comments,
      path:"/comments"
    }
  ]
const router=new VueRouter({
  mode:'history',
  routes
})
export default router