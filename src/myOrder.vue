<template>
	<div class="myOrder">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="全部" name="first">
				<div v-for="(item,index) in myOrder" :key="index">
					<div>
						<div style="border:1px solid #999999;padding:.2rem .6rem;background-color:#ededed;">
							<span class="spanOne">{{item.orderInf.date}}</span>
							<span class="spanTwo">订单号：{{item.orderInf.orderno}}（零售）</span>
							<span class="spanThr">订单金额：¥{{item.orderInf.total}}</span>
							<span class="spanFour">在线支付{{item.booklist.lenght}}</span>
							<span class="spanFiv">
								<el-button id="deleteButton" round icon="el-icon-delete" @click="deleteOrder(item.orderInf.orderno)"></el-button>
							</span>
						</div>
						<div style="border:1px solid #d9d9d9">
							<el-row>
								<el-col :span="12">
									<span v-for="(items,index) in item.booklist" :key="items.name">
										<template v-if="index<4">
											<img width="22%" height="22%" :src="items.src">
										</template>
										<template v-else-if="index==(item.booklist.length-1)">
											<a href="#"><span class="tooLong">...</span></a>
										</template>
									</span>
								</el-col>
								<el-col :span="4" style="text-align:center;">
									<i class="el-icon-user"></i>
									<div class="icon-under">1</div>
								</el-col>
								<el-col :span="4" style="text-align:center;">
									<div class="payState">
										<template v-if="item.orderInf.status==0">
											待付款
										</template>
										<template v-else>
											已付款
										</template>
									</div>
									<div class="orderDet"><a href="javascript:void(0);" @click="getGoodsHref(item,item.orderInf.orderno)">订单详情</a></div>
								</el-col>
								<el-col :span="4" style="text-align:center;">
									<template v-if="item.orderInf.status==0">
										<el-button id="payNow" size="small" @click="payNow(item.orderInf.orderno)">立即支付</el-button><br>
									</template>
									<!-- <el-button id="payAgain" size="small" @click="buyAgain(item)">再次购买</el-button> -->
								</el-col>
							</el-row>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="待付款" name="second">
				<div v-for="(item,index) in myOrder" :key="index">
					<div>
						<template v-if="item.orderInf.status==0">
							<div style="border:1px solid #999999;padding:.2rem .6rem;background-color:#ededed;">
								<span class="spanOne">{{item.orderInf.date}}</span>
								<span class="spanTwo">订单号：{{item.orderInf.orderno}}（零售）</span>
								<span class="spanThr">订单金额：¥{{item.orderInf.total}}</span>
								<span class="spanFour">在线支付{{item.booklist.lenght}}</span>
								<span class="spanFiv">
									<el-button id="deleteButton" round icon="el-icon-delete" @click="deleteOrder(item.orderInf.orderno)"></el-button>
								</span>
							</div>
							<div style="border:1px solid #d9d9d9">
								<el-row>
									<el-col :span="12">
										<span v-for="(items,index) in item.booklist" :key="items.name">
											<template v-if="index<4">
												<img width="22%" height="22%" :src="items.src">
											</template>
											<template v-else-if="index==(item.booklist.length-1)">
												<a href="#"><span class="tooLong">...</span></a>
											</template>
										</span>
									</el-col>
									<el-col :span="4" style="text-align:center;">
										<i class="el-icon-user"></i>
										<div class="icon-under">1</div>
									</el-col>
									<el-col :span="4" style="text-align:center;">
										<div class="payState">
											<template v-if="item.orderInf.status==0">
												待付款
											</template>
											<template v-else>
												已付款
											</template>
										</div>
										<div class="orderDet"><a href="javascript:void(0);" @click="getGoodsHref(item,item.orderInf.orderno)">订单详情</a></div>
									</el-col>
									<el-col :span="4" style="text-align:center;">
										<el-button id="payNow" size="small" @click="payNow(item.orderInf.orderno)">立即支付</el-button><br>
										<!-- <el-button id="payAgain" size="small" @click="buyAgain(item)">再次购买</el-button> -->
									</el-col>
								</el-row>
							</div>
						</template>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="待收货" name="third">
				<div v-for="(item,index) in myOrder" :key="index">
					<div>
						<template v-if="item.orderInf.status==1">
							<div style="border:1px solid #999999;padding:.2rem .6rem;background-color:#ededed;">
								<span class="spanOne">{{item.orderInf.date}}</span>
								<span class="spanTwo">订单号：{{item.orderInf.orderno}}（零售）</span>
								<span class="spanThr">订单金额：¥{{item.orderInf.total}}</span>
								<span class="spanFour">在线支付{{item.booklist.lenght}}</span>
								<span class="spanFiv">
									<el-button id="deleteButton" round icon="el-icon-delete" @click="deleteOrder(item.orderInf.orderno)"></el-button>
								</span>
							</div>
							<div style="border:1px solid #d9d9d9">
								<el-row>
									<el-col :span="12">
										<span v-for="(items,index) in item.booklist" :key="items.name">
											<template v-if="index<4">
												<img width="22%" height="22%" :src="items.src">
											</template>
											<template v-else-if="index==(item.booklist.length-1)">
												<a href="#"><span class="tooLong">...</span></a>
											</template>
										</span>
									</el-col>
									<el-col :span="4" style="text-align:center;">
										<i class="el-icon-user"></i>
										<div class="icon-under">1</div>
									</el-col>
									<el-col :span="4" style="text-align:center;">
										<div class="payState">
											<template v-if="item.orderInf.status==0">
												待付款
											</template>
											<template v-else>
												已付款
											</template>
										</div>
										<div class="orderDet"><a href="javascript:void(0);" @click="getGoodsHref(item,item.orderInf.orderno)">订单详情</a></div>
									</el-col>
									<el-col :span="4" style="text-align:center;">
										<template v-if="item.orderInf.status==0">
											<el-button id="payNow" size="small" @click="payNow(item.orderInf.orderno)">立即支付</el-button><br>
										</template>
										<!-- <el-button id="payAgain" size="small" @click="buyAgain(item)">再次购买</el-button> -->
									</el-col>
								</el-row>
							</div>
						</template>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="待评价" name="fourth">暂无订单</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				myOrder: null,
				activeName: 'first',
				count: 0
			};
		},
		mounted() {
			//数组类型
			this.myOrder = JSON.parse(localStorage.getItem('myOrder'));
			//console.log(this.myOrder);
		},
		methods: {
			//删除订单方法
			deleteOrder(orderId){
				this.myOrder.forEach((item,index)=>{
					if(item.orderInf.orderno===orderId){
						this.$confirm('是否删除该订单?', '提示', {
							cancelButtonText: '取消',
							confirmButtonText: '确定',
							type: 'warning'
						}).then(() => {
							this.$message({
								type: 'success',
								message: '删除成功!'
							});
							this.myOrder.splice(index,1);
							localStorage.setItem('myOrder', JSON.stringify(this.myOrder));
						})
					}
				})
			},
			// 再次购买方法
			// buyAgain(repeat){
			// 	//console.log(repeat);
			// 	this.myOrder.push(repeat);
			// 	console.log(this.myOrder);
				
			// 	//-------------修改指定支付状态的会一起改变bug---------------
			// 	//this.myOrder[this.myOrder.length-1].orderInf.status=0;
			// 	//asd.orderInf.status=0;
			// 	console.log(this.myOrder[this.myOrder.length-1]);
				
			// },
			//点击立即支付
			payNow(no){
				console.log(this.myOrder);
				this.myOrder.forEach((item)=>{
					if(item.orderInf.orderno===no){
						item.orderInf.status=1;
					}
				});
				localStorage.setItem('myOrder',JSON.stringify(this.myOrder));
				console.log(this.myOrder);
			},
			//点击订单详情
			getGoodsHref(item,val) {
				localStorage.setItem('thisOrder',JSON.stringify(item))
				location.href='#/orderDet/id=' + val;
			},
			handleClick() {
				console.log(this.myOrder);
			}
		}
	};
</script>

<style scoped="">
	/* 支付购买按钮 */
	#payNow {
		margin-top: .8rem;
		background-color: #EB4043;
		color: #fff;
	}

	#payAgain {
		margin-top: .3rem;
		margin-left: 0;
	}

	/* 删除按钮样式 */
	#deleteButton {
		border: none;
		background: none;
		font-size: 1.2rem;
	}

	/* icon标签 */
	.el-icon-user {
		color: #666;
		font-size: 2rem;
		margin-top: 1.2rem;
	}

	.icon-under {
		margin-top: 1.2rem;
	}

	/* 第三栏 */
	.payState {
		margin-top: 1.2rem;
		color: #eb4043;
	}

	.orderDet {
		margin-top: 1rem;
	}

	.orderDet>a {
		color: #666;
	}

	.orderDet>a:hover {
		color: #eb4043;
	}

	/* 省略号 */
	.tooLong {
		font-size: 1.6rem;
		color: #bfbfbf;
	}

	.tooLong:hover {
		color: #9c9c9c;
	}

	/* 灰色span样式 */
	.spanOne {
		margin-right: 8rem;
	}

	.spanTwo {
		margin-right: 10rem;
	}

	.spanThr {
		margin-right: 6rem;
	}

	.spanFour {
		margin-right: 8rem;
	}

	.spanFiv {}

	/* 重写layout布局 */
	.el-row {
		padding: .5rem .5rem;
	}

	.myOrder {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 5rem;
		padding: 10px 10px;
		width: 60%;
		height: 56rem;
	}

	.el-tabs__item {
		font-size: 1.2rem !important;
	}
</style>
