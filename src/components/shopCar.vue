<template>
	<div class="shop">
		<el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
			<el-step title="我的购物车" icon="el-icon-shopping-cart-2">
			</el-step>
			<el-step title="填写订单信息" icon="el-icon-s-order">
			</el-step>
			<el-step title="成功提交订单" icon="el-icon-sell">
			</el-step>
		</el-steps>
		<router-view></router-view>
		<el-button style="margin-top: 12px;" @click="last">上一步</el-button>
		<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				para: '',
				active: 0,
				totalPrice: 0,
			}
		},
		//创建实例后执行，初始化总金额
		created() {
			location.href = "#/shop/Car";
			this.tableData.forEach(item => {
				this.totalPrice = this.totalPrice + item.num;
			});
		},
		watch: {
			$route(to, from) {
				if(from.path==='/shop/Car'&&to.path==='/shop')
					location.href = "#/shop/Car";
				if(from.path==='/shop/Car'&&to.path==='/shop/orderInf')
					this.active=1;
				else if(from.path==='/shop/orderInf'&&to.path==='/shop/orderSub')
					this.active=2;
				//console.log(from.path); //从哪来
				//console.log(to.path); //到哪去
				if(this.$route.path.split('/').length===4)
					this.active=parseInt(this.$route.path.split('/')[3].slice(3));
			}
		},
		methods: {
			headClass() { //表头居中显示
				return "text-align:center"
			},
			rowClass() { //表格数据居中显示
				return "text-align:center"
			},
			handleChange() {
				this.totalPrice = 0;
				this.tableData.forEach(item => {
					this.totalPrice = this.totalPrice + item.num;
				});
			},
			last() {
				if (this.active === 2) {
					this.$message({
						message: '订单已提交!无法后退',
						type: 'warning'
					});
				} else {
					if (this.active === 0) {
						this.$message({
							message: '当前已经是第一步了',
							type: 'warning'
						});
					} else {
						this.active--;
					}
					switch (this.active) {
						case 0:
							location.href = "#/shop/Car";
							break;
						case 1:
							location.href = "#/shop/orderInf";
							break;
						case 2:
							location.href = "#/shop/orderSub";
							break;
					}
				}

			},
			next() {
				if(this.active === 1){
					this.$message.warning('请点击提交按钮！');
				}else{
					if (this.active === 2) {
						this.$message({
							message: '当前已经是最后一步了',
							type: 'warning'
						});
					} else {
						this.active++;
					}
					switch (this.active) {
						case 0:
							location.href = "#/shop/Car";
							break;
						case 1:
							location.href = "#/shop/orderInf";
							break;
						case 2:
							location.href = "#/shop/orderSub";
							break;
					}
				}
			}
		}
	}
</script>

<style scoped="">
	.shop {
		margin-left: 19rem;
		margin-bottom: 5rem;
		padding: 10px 10px;
		width: 70.5%;
		height: 56rem;
	}
</style>
