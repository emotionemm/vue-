<template>
	<div class="orderStep">
		<el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
			<el-step title="步骤 1" icon="el-icon-goods"></el-step>
			<el-step title="步骤 2"></el-step>
			<el-step title="步骤 3"></el-step>
		</el-steps>
		<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0
			};
		},

		methods: {
			next() {
				if (this.active++ > 2) this.active = 0;
			}
		}
	}
</script>

<style>
	.orderStep {
		margin-left: 19rem;
		padding: 10px 10px;
		width: 70.5%;
		height: 8rem;
	}
</style>
