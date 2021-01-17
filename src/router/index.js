import Vue from "vue";
import Router from 'vue-router'
import app from '../index.vue'
import shop from '../Shop.vue'
import favorites from '../Favorites.vue'
import myOrder from '../myOrder.vue'

import wenxue from '../components/index/sort/wenxue.vue'
import car from '../components/index/sort/Car.vue'
import orderInf from '../components/index/sort/orderInf.vue'
import orderSub from '../components/index/sort/orderSub.vue'
import orderDet from '../components/orderDet.vue'
Vue.use(Router);
var router =new Router({
	routes:[
		{path:'/',redirect:'/index'},
		{path:'/index',component:app},
		{path:'/wenxue',component:wenxue},
		{path:'/fiction',component:wenxue},
		{path:'/qingchunwenxue',component:wenxue},
		{
			path:'/shop',
			component:shop,
			children:[
				{path:'car',component:car},
				{path:'car/:id',component:car},
				{path:'orderInf',component:orderInf},
				{path:'orderSub',component:orderSub}
			]
		},
		{path:'/favorites',component:favorites},
		{path:'/myOrder',component:myOrder},
		{path:'/orderDet/:id',component:orderDet}
	]
})
export default router