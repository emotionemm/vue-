<template>
	<div class="onlinePay">
		<div>
			订单<span class="numbers">{{orderNo}}</span>已成功提交，您需要支付<span class="numbers">￥{{totalPrice+6.0}}</span>
		</div>
		<div>请您提交订单后48小时内支付，超时后订单会自动取消。</div>
		<div>
			<a class="onlinePayA" href="#/myOrder">查看订单 >></a>
			<a class="onlinePayA" href="#/wenxue">继续购物 >></a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				car:null,
				totalPrice:0,
				orderNo:0
			}
		},
		//创建实例后执行，初始化总金额
		mounted() {
			let myOrder=JSON.parse(localStorage.getItem('myOrder'));
			console.log(myOrder);
			this.orderNo=myOrder[myOrder.length-1].orderInf.orderno
			this.car=JSON.parse(localStorage.getItem('shopCar'))
			this.car.forEach(item=>{
				this.totalPrice=item.newPrice*item.num+this.totalPrice;
				this.discount=(item.oldPrice-item.newPrice)*item.num+this.discount;
			});
			//订单提交成功后，清空购物车
			localStorage.removeItem('shopCar');
		}
	}
</script>

<style scoped="">
	/* 容器样式 */
	.onlinePay {
		margin-top: 1rem;
	}
	.onlinePay>div{
		margin-bottom:1rem;
	}
	.onlinePay>div:nth-child(-n+2){
		font-size:1.2rem;
	}
	/* 数字样式 */
	.numbers{
		color:#F80000;
		margin:0 .5rem;
	}
	/* 超链接样式 */
	.onlinePayA {
		font-size:1rem;
		color: #184ca0;
		margin-right:3rem;
	}
	.onlinePayA:hover{
		text-decoration:underline;
	}
</style>
