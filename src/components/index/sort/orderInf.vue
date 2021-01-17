<template>
	<div class="inf">
		<div class="infOne">
			<h2>填写核对订单信息&nbsp;&nbsp;&nbsp;<span>|</span></h2>
		</div>
		<div>
			<el-form ref="form" :model="form" label-width="5.2rem" :rules="rules">
				<el-form-item label="个人信息" style="background-color: #f0f0f0"></el-form-item>
				<el-row>
					<el-col :span="5">
						<el-form-item label="收件姓名" prop="name">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="5">
						<el-form-item label="联系电话" prop="phone">
							<el-input v-model="form.phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="10">
						<el-form-item label="所在地区" prop="area">
							<el-cascader size="large" :options="options" v-model="form.area" filterable>
							</el-cascader>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="详细地址" prop="address">
					<el-input v-model="form.address"></el-input>
				</el-form-item>
				<div class="bar">
					<el-form-item label="送货方式" style="background-color: #f0f0f0;" prop="deliveryMethod"></el-form-item>
					<el-radio-group v-model="form.deliveryMethod">
						<el-radio-button label="快递配送" border></el-radio-button>
					</el-radio-group>
				</div>
				<el-form-item label="支付方式" style="background-color: #f0f0f0;" prop="payment"></el-form-item>
				<div class="bar">
					<el-radio-group v-model="form.payment">
						<el-radio label="在线支付" border size="medium">在线支付</el-radio>
						<el-radio label="银行转账" border size="medium">银行转账</el-radio>
					</el-radio-group>
				</div>
				<div class="bar">
					<el-form-item label="图书清单" style="background-color: #f0f0f0;">
						<a id="backShop" href="#/shop/Car/id=0">返回购物车修改</a>
					</el-form-item>
					<div class="shopDiv">
						<el-table :data="car" style="width: 100%">
							<el-table-column width="55">
							</el-table-column>
							<el-table-column prop="name" label="图书名称" width="400">
							</el-table-column>
							<el-table-column label="单价（元）" width="180">
								<template slot-scope="scope">
									<span class="newGoodsPrice_now">￥{{scope.row.newPrice.toFixed(2)}}</span>&nbsp;&nbsp;
									<span class="newGoodsPrice2_old">￥{{scope.row.oldPrice.toFixed(2)}}</span>
								</template>
							</el-table-column>
							<el-table-column prop="num" label="数量" width="180"></el-table-column>
							<el-table-column label="小计（元）">
								<template slot-scope="scope">
									￥{{(scope.row.num*scope.row.newPrice).toFixed(2)}}
								</template>
							</el-table-column>
							<el-table-column label="实付">
								<template slot-scope="scope">
									￥{{(scope.row.num*scope.row.newPrice).toFixed(2)}}
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
				<el-row>
					<el-col :span="16">
						<el-form-item label="我的卡券" style="background-color: #f0f0f0;margin-bottom:1rem;"></el-form-item>
						<div class="myCard">
							<div><i class="el-icon-circle-plus-outline"></i>有<span>0</span>张优惠券可以使用</div>
							<div><i class="el-icon-circle-plus-outline"></i>有<span>0</span>张书馨卡可以使用</div>
						</div>
						<el-form-item label="备注" style="margin-right:3rem;">
							<el-input type="textarea" v-model="form.desc" :autosize="{ minRows:4, maxRows:6}" placeholder="限40个字 请将购买需求在备注详细说明"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<div class="orderInfSub" style="border:1px solid #dbdbdb;">
							<div>
								<span class="orderInfLeft">商品金额总计：</span>
								<span class="orderInfRight">￥{{totalPrice.toFixed(2)}}</span>
							</div>
							<div>
								<span class="orderInfLeft">运费：</span>
								<span class="orderInfRight">￥6.0</span>
							</div>
							<div>
								<span class="orderInfLeft">节省了：</span>
								<span class="orderInfRight">￥{{discount.toFixed(2)}}</span>
							</div>
							<div>
								<span class="orderInfLeft">您还需支付：</span>
								<span class="orderInfRight">￥{{(totalPrice+6.0).toFixed(2)}}</span>
							</div>
							<div class="subButton">
								<el-button @click="onSubmit('form')">提交订单</el-button>
							</div>
						</div>
					</el-col>
				</el-row>
			</el-form>
		</div>
	</div>
</template>

<script>
	import {
		regionData
	} from 'element-china-area-data'
	export default {
		data() {
			return {
				options: regionData,
				selectedOptions: [],
				form: {
					orderno: 0,
					date:null,
					total:0,
					name: '',
					phone: '',
					area: '',
					address: '',
					desc:'',
					deliveryMethod: '',
					payment: '',
					status:''
				},
				rules: {
					name: [{
							required: true,
							message: '请输入收件人姓名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 5,
							message: '姓名必须有2-5位',
							trigger: 'blur'
						}
					],
					phone: [{
						required: true,
						message: '请输入收件人电话',
						trigger: 'blur'
					}],
					area: [{
						required: true,
						message: '请选择收货地区',
						trigger: 'blur'
					}],
					address: [{
						required: true,
						message: '请填入收货详细地址',
						trigger: 'blur'
					}],
					deliveryMethod: [{
						required: true,
						message: '请选择送货方式',
						trigger: 'blur'
					}],
					payment: [{
						required: true,
						message: '请选择支付方式',
						trigger: 'blur'
					}]
				},
				totalPrice: 0,
				discount: 0,
				car: null,
				// 订单数据
				myOrders: [

				],
				// 订单数组单项
				orderOne: {
					orderInf: '',
					booklist: ''
				}
			}
		},
		mounted() {
			this.car = JSON.parse(localStorage.getItem('shopCar'))
			//console.log(this.car);
			this.car.forEach(item => {
				this.totalPrice = item.newPrice * item.num + this.totalPrice;
				this.discount = (item.oldPrice - item.newPrice) * item.num + this.discount;
			});
		},
		methods: {
			onSubmit(form) {
				this.$refs[form].validate((valid) => {
					this.dateChange();
					this.total();
					this.statusIn();
					if (valid) {
						this.randomOrderNo();
						//alert(JSON.stringify(this.form))
						this.orderOne.orderInf = this.form;
						//给订单中图书是否支付状态设置为1
						this.car.forEach((item)=>{
							item.isPay=1;
						})
						this.orderOne.booklist = this.car;
						if(localStorage.getItem('myOrder')){//订单不为空，则加入
							//存放全部订单的临时变量
							this.myOrder=JSON.parse(localStorage.getItem('myOrder'));
							this.myOrders=this.myOrder;
							this.myOrders.push(this.orderOne);
							localStorage.setItem('myOrder', JSON.stringify(this.myOrders));
						}else{//否则直接添加
							this.myOrders.push(this.orderOne)
							localStorage.setItem('myOrder', JSON.stringify(this.myOrders));
						}
						// this.myOrders[0].orderInf=this.form;
						// this.myOrders[0].booklist=this.car;
						//alert(JSON.stringify(this.myOrders))
						this.$alert('订单提交成功！', '提示', {
							confirmButtonText: '确定',
							callback: action => {
								location.href='#/shop/orderSub';
								console.log(action)
							}
						});
					}else {
							console.log('error submit!!');
							return false;
						}
					});
				console.log('submit!');
			},
			statusIn(){//赋予订单状态
				this.form.status=0;
			},
			total(){//计算总金额
				this.form.total=this.totalPrice+6;
			},
			dateChange(){
				// 获取当前日期
				var date = new Date();
				
				// 获取当前月份
				var nowMonth = date.getMonth() + 1;
				
				// 获取当前是几号
				var strDate = date.getDate();
				
				// 添加分隔符“-”
				var seperator = "-";
				
				// 对月份进行处理，1-9月在前面添加一个“0”
				if (nowMonth >= 1 && nowMonth <= 9) {
					nowMonth = "0" + nowMonth;
				}
				
				// 对月份进行处理，1-9号在前面添加一个“0”
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				
				// 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
				let nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
				this.form.date=nowDate;
			},
			randomOrderNo() {
				//生成8位随机数订单
				let codeLength = 8;
				let code = '';
				for (let i = 0; i < codeLength; i++) {
					code += Math.round(Math.random() * 9)
				}
				this.form.orderno = code;
			}
		}
	}
</script>

<style scoped="">
	.bar {
		margin-bottom: 2rem;
	}

	#backShop {
		float: right;
		margin-right: 3rem;
		color: #51779c;
		font-size: 0.94rem;
	}

	#backShop:hover {
		text-decoration: underline;
	}

	/* 我的优惠券 */
	.myCard {
		margin-bottom: 1rem;
		padding: 0 .8rem;
	}

	.myCard>div {
		font-size: 1rem;
		height: 3rem;
		line-height: 3rem;
		border-bottom: 1px solid #eaeaef;
	}

	.myCard>div>i {
		margin-right: .5rem;
		color: #d0d0d0;
		font-size: 1.2rem;
	}

	.myCard>div>span {
		color: #f70302;
		margin: 0 .3rem;
	}

	/* 提交订单框 */
	.orderInfSub {
		height: 18rem;
		padding: 1rem 2rem;
	}

	.orderInfSub>div {
		height: 2.4rem;
	}

	.orderInfSub>div:nth-child(3) {
		margin-bottom: .5rem;
		border-bottom: 1px solid #dbdbdb;
	}

	.orderInfLeft {
		float: left;
	}

	.orderInfRight {
		float: right;
		color: #f80000;
	}

	/* 提交订单容器样式 */
	.subButton {
		text-align: center;
	}

	.subButton>button {
		background-color: #f80000;
		color: #fff;
		width: 13rem;
		height: 4rem;
		font-size: 1.5rem;
	}

	/* 容器样式 */
	.inf {
		margin-top: 1rem;
	}

	.infOne>h2 {
		color: #414141;
	}

	.infOne>h2>span {
		font-size: 1.2rem;
		color: #b0b0b0;
	}

	.inf>div:nth-child(2) {
		padding: 1.5rem 5rem;
		border: 1px solid #dbdbdb;
	}
</style>
