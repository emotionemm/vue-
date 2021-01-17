<template>
	<div id="app">
		<Header></Header>
		<div>
			<router-link to="/index">
			</router-link>
			<router-link to="/wenxue"></router-link>
			<router-link to="/shop">
				<router-link to="/shop/car"></router-link>
				<router-link to="/shop/orderInf"></router-link>
				<router-link to="/shop/orderSub"></router-link>
			</router-link>
			<router-link to="/favorites"></router-link>
			<router-link to="/myOrder"></router-link>
			<router-link to="'/orderDet/'+id"></router-link>
		</div>
		<router-view></router-view>

	</div>
</template>

<script>
	import bookData from './components/index/data.js'
	import Header from './components/index/Header.vue'
	// import Aside from './components/Aside.vue'
	// import index_content from './components/index_content.vue'
	// import booklistsss from './components/booklistsss.vue'
	// import booklistHorizontal from'./components/booklistHorizontal.vue'
	// import orderSubmit from './components/orderSubmit.vue'
	//localStorage.clear();
	if(localStorage.getItem('myOrder')){
		console.log(0)
		console.log(JSON.parse(localStorage.getItem('myOrder')))
	}else{
		localStorage.setItem('myOrder',JSON.stringify(bookData.data().myOrder));
		console.log(JSON.parse(localStorage.getItem('myOrder')));
	}
	if(localStorage.getItem('shopCar')){
		console.log(1)
		console.log(JSON.parse(localStorage.getItem('shopCar')))
	}else{
		localStorage.setItem('shopCar',JSON.stringify(bookData.data().shopCar));
		console.log(JSON.parse(localStorage.getItem('shopCar')));
	}
	localStorage.setItem('bookData',JSON.stringify(bookData.data().allBook));
	console.log(JSON.parse(localStorage.getItem('bookData')));
	
	export default {
		name: 'App',
		components: {
			Header
			// Aside,
			// index_content,
			// booklistsss,
			// booklistHorizontal,
			// orderSubmit
		}
	}
</script>

<style>
	.booklistsss {
		margin-left: 19rem;
		padding: 10px 10px;
		width: 70.5%;
		height: 40rem;
	}

	.booklistHorizontal {
		margin-left: 19rem;
		margin-right: 15.8rem;
	}
</style>
