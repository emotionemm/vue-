<template>
	<div class="index">
		<Aside></Aside>
		<index_content class="index_content"></index_content>
		<booklistsss class="booklistsss"></booklistsss>
		
	</div>
</template>

<script>
	import Aside from './components/index/Aside.vue'
	import index_content from './components/index/index_content.vue'
	import booklistsss from './components/index/booklistsss.vue'
	export default {
		name: 'index',
		components: {
			Aside,
			index_content,
			booklistsss
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

</style>
