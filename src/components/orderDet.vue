<template>
	<div class="orderDetA">
		<div class="orderDetB">
			<el-page-header @back="goBack" content="详情页面">
			</el-page-header>
			<div class="detHead">
				<div style="background:#ededed;" class="headBar">
					<span style="margin-right:5rem;">订单号：{{orderInformation.orderno}}（零售）</span>
					<span>订单金额：￥{{orderInformation.total.toFixed(2)}}</span>
				</div>
				<div class="headUnder">
					<div class="headUnderLeft">
						<p>订单状态：
						<template v-if="orderInformation.status==0">
							<strong>待付款</strong>
						</template>
						<template v-else>
							<strong>已付款</strong>
						</template>
						</p>
						<p>完成本单预计会获得33书虫值+33书币，评论可获得更多书币</p>
					</div>
					<div class="headUnderRight">
						<!-- <button style="">再次购买</button> -->
					</div>
				</div>
			</div>
			<div class="detContent">
				<div>
					<p>{{orderInformation.name}}</p>
					<p>{{orderInformation.phone}}</p>
					<p>中国,{{province}},{{city}},{{Area}}</p>
				</div>
				<div>
					<p>下单时间：{{orderInformation.date}} 15:23:15</p>
					<p>付款方式：{{orderInformation.payment}}</p>
					<p>配送方式：{{orderInformation.deliveryMethod}}</p>
				</div>
				<div>
					<p>发票类型：无</p>
					<p>备注： 无</p>
				</div>
			</div>
			<div class="detFoot">
				<div style="">图书名称</div>
				<div class="shopDiv">
					<el-table :data="car" style="width: 100%">
						<el-table-column width="55">
						</el-table-column>
						<el-table-column prop="name" label="图书名称" width="400">
						</el-table-column>
						<el-table-column label="单价（元）" width="180">
							<template slot-scope="scope">
								<span class="newGoodsPrice_now">￥{{scope.row.newPrice}}</span>&nbsp;&nbsp;
								<span class="newGoodsPrice2_old">￥{{scope.row.oldPrice}}</span>
							</template>
						</el-table-column>
						<el-table-column prop="num" label="数量" width="180"></el-table-column>
						<el-table-column label="小计（元）">
							<template slot-scope="scope">
								￥{{scope.row.num*scope.row.newPrice}}
							</template>
						</el-table-column>
						<el-table-column label="实付">
							<template slot-scope="scope">
								￥{{scope.row.num*scope.row.newPrice}}
							</template>
						</el-table-column>
					</el-table>
				</div>
				<div style="height:9rem;margin-top:1rem;">
					<div style="float:right;border-top:1px dashed #c7c7c7;width:100%;">
						<div style="float:right;margin-right:3rem;color:#666666">
							<p>商品金额：¥{{(orderInformation.total-6.0).toFixed(2)}}</p>
							<p>运费：￥6.00</p>
							<p>节省了：￥{{this.discount}}</p>
							<p>应付金额：￥{{orderInformation.total.toFixed(2)}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		CodeToText
	} from 'element-china-area-data'
	export default {
		data(){
			return{
				car: null,
				orderInformation:null,
				myOrder:null,
				discount:0,
				province:'',
				city:'',
				Area:''
			}
		},
		mounted() {
			//获取当前url中参数id的值
			//console.log(this.$route.path.split('/')[2].slice(3));
			this.myOrder=JSON.parse(localStorage.getItem('thisOrder'));
			//console.log(this.myOrder);
			this.car=this.myOrder.booklist;
			this.car.forEach((item)=>{
				this.discount=this.discount+(item.oldPrice-item.newPrice)*item.num;
			})
			this.orderInformation=this.myOrder.orderInf;
			//console.log(10);
			this.province=CodeToText[this.orderInformation.area[0]];
			this.city=CodeToText[this.orderInformation.area[1]];
			this.Area=CodeToText[this.orderInformation.area[2]];
			console.log(this.orderInformation);
			// this.myOrder.forEach((item,index)=>{
			// 	this.car
			// })
		},
		//返回
		methods: {
			goBack() {
				location.href='#/myOrder';
			}
		}
	}
</script>

<style scoped="">
	/* 第三个div */
	.detFoot{
		border:1px solid #d9d9d9;
		margin-top:1rem;
	}
	.detFoot>div:nth-child(1){
		padding:.8rem 1.6rem;
		font-size:1.2rem;
		background-color: #f0f0f0;
	}
	/* 第二个div */
	.detContent{
		border:1px solid #d9d9d9;
		padding:1rem 1rem;
		display:flex;
	}
	.detContent>div{
		flex:1;
		margin:0 .6rem;
	}
	.detContent>div:nth-child(-n+2){
		border-right:1px dashed #c1c1c1;
	}
	/* 第一个div */
	.headUnder{
		padding:1.3rem;
		height:5rem;
	}
	.headUnderLeft{
		float:left;
	}
	.headUnderRight{
		float:right;
		width:16rem;height:5rem;
	}
	.headUnderRight>button{
		margin:auto auto;
		width:8rem;height:2rem;
	}
	.headUnderLeft>p>strong{
		font-size:1.4rem;
		color:#eb4043;
	}
	/* div容器的横条 */
	.headBar{
		font-size:1.2rem;
		padding:.8rem 1.6rem;
	}
	/* 三个div容器 */
	.detHead{
		margin:1rem 0;
		border:1px solid #d9d9d9;
		font-family: "Microsoft YaHei";
	}
	/* 容器 */
	.orderDetB{
		margin-top:1.2rem;
		margin-left:auto;
		margin-right:auto;
		margin-bottom: 5rem;
		padding: 10px 10px;
		width: 60.5%;
		border:1px solid #d9d9d9;
	}
	.orderDetA{
		height:60rem;
	}
</style>
