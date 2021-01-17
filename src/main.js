import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
import VueResource from 'vue-resource'

Vue.use(ElementUI);
Vue.use(VueResource);

new Vue({
	el: '#app',
	render: h => h(App),
	router
})