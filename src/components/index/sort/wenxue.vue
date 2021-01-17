<template>
	<div style="height:50rem;">
		<Aside></Aside>
		<div class="booklistHorizontal">
			<el-breadcrumb separator="/" style="te">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item>图书分类</el-breadcrumb-item>
				<el-breadcrumb-item>文学</el-breadcrumb-item>
			</el-breadcrumb>
			<booklistHorizontal></booklistHorizontal>
		</div>
	</div>
</template>

<script>
	import Aside from '../Aside.vue';
	import booklistHorizontal from '../booklistHorizontal.vue';
	
	export default {
		name: 'App',
		components: {
			Aside,
			booklistHorizontal
		}
	}
</script>

<style>
	.booklistHorizontal {
		padding: 1.2rem 1.2rem;
		margin-top: .5rem;
		margin-left: 33rem;
		margin-right: 15.8rem;
		margin-bottom:5rem;
		width: 60.5%;
		border: 1px solid #B3B3B3;
	}
</style>
