<template>
	<div class="shopDiv">
		<el-table :data="car" style="width: 100%" :header-cell-style="headClass" :cell-style="rowClass">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="name" label="图书名称" width="400">
				<template slot-scope="scope">
					<img :src="scope.row.src" width="32%" height="36%" style="float:left;" />
					<span style="position: absolute;top:39%;left:33%;">
						{{scope.row.name}}
					</span>
				</template>
			</el-table-column>
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="oldPrice" label="定价（元）" width="180">
			</el-table-column>
			<el-table-column prop="newPrice" label="一星会员（元）" width="120">
			</el-table-column>
			<el-table-column label="数量操作" width="180">
				<template slot-scope="scope">
					<el-input-number size="mini" v-model="scope.row.num" @change="handleChange(scope.row.name,scope.row.num)" :min="1"
					label="数量操作"></el-input-number>
				</template>
			</el-table-column>
			<el-table-column prop="num" label="小计（元）">
				<template slot-scope="scope">
					{{(scope.row.newPrice*scope.row.num).toFixed(2)}}
				</template>
			</el-table-column>
			<el-table-column prop="action" label="操作">
				<template slot-scope="scope">
					<el-button type="warning" icon="el-icon-star-off" circle @click="addCollect(scope.row)"></el-button>
					<el-button type="danger" icon="el-icon-delete" circle @click="deleteBook(scope.row.name)"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="totalRow">
			<span>合计</span>
			<span class="snacks">{{totalPrice.toFixed(2)}}元</span>
			<span>
				<span>
					已选择2件商品，商品总金额<span class="snacks">￥{{totalPrice.toFixed(2)}}</span>元
				</span>
				<span>已优惠<span class="snacks">￥{{discount.toFixed(2)}}</span>元</span>
			</span>
			<span>
				<el-button style="font-size:1.8rem; background-color:#ff2832;color:#fff;height:4rem;width:100%;" @click="settlement">立即结算</el-button>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				car: null,
				totalPrice: 0,
				discount: 0,
				favorites: []
			}
		},
		//创建实例后执行，初始化总金额
		mounted() {
			//如果收藏夹不为空，则给favorites变量赋值；否则初始化收藏夹
			if (localStorage.getItem('Favorites')) {
				this.favorites = JSON.parse(localStorage.getItem('Favorites'));
			} else {
				localStorage.setItem('Favorites', JSON.stringify(this.favorites));
			}

			this.car = JSON.parse(localStorage.getItem('shopCar'))
			if (this.car.length == 0){
				this.$message.warning('购物车空空如也,去看看商品吧！');
				setTimeout(function(){
					location.href='#/wenxue'
				},2000);
			}
			else {
				this.car.forEach(item => {
					this.totalPrice = item.newPrice * item.num + this.totalPrice;
					this.discount = (item.oldPrice - item.newPrice) * item.num + this.discount;
				});
			}
		},
		methods: {
			addCollect(book) {
				let flag = 0;
				if (!this.favorites.length == 0) {
					this.favorites.forEach((item) => {
						if (item.name === book.name) {
							this.$message({
								showClose: true,
								type: 'warning',
								message: '已经收藏过了，看看别的吧！'
							})
							flag = 1;
						}
					})
					if (flag === 0) {
						this.$message.success({
							showClose: true,
							type: 'success',
							message: '已收藏'
						});
						this.favorites.push(book);
					}
				} else {
					this.$message.success({
						showClose: true,
						type: 'success',
						message: '已收藏'
					});
					this.favorites.push(book);
				}
				localStorage.setItem('Favorites', JSON.stringify(this.favorites));
			},
			settlement() {
				location.href = '#/shop/orderInf';
			},
			deleteBook(bookname) {
				this.$confirm('是否从购物车删除该商品?', '提示', {
					cancelButtonText: '取消',
					confirmButtonText: '确定',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.car.forEach((item, index) => {
						if (item.name === bookname) {
							console.log(item.name);
							console.log(index);
							this.car.splice(index, 1);
						}
					})
					localStorage.setItem('shopCar', JSON.stringify(this.car));
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			headClass() { //表头居中显示
				return "text-align:center"
			},
			rowClass() { //表格数据居中显示
				return "text-align:center"
			},
			handleChange(name, num) {
				if (num === 0) {
					this.deleteBook(name);
				} else {
					this.totalPrice = 0;
					this.discount = 0;
					this.car.forEach(item => {
						if (item.name === name) {
							item.num = num;
						}
						this.totalPrice = item.newPrice * item.num;
						this.discount = (item.oldPrice - item.newPrice) * item.num + this.discount;
					});
					localStorage.setItem('shopCar', JSON.stringify(this.car));
				}
			}
		}
	}
</script>

<style scoped="">
	.shopDiv {
		margin-top: 1rem;
	}

	.totalRow {
		height: 4rem;
		margin-bottom: 2rem;
		display: flex;
		justify-content: space-between;
		background-color: rgba(102, 102, 102, 0.2);
		margin-top: .5rem;
	}

	.totalRow>span:nth-child(1) {
		color: #E31436;
		font-size: 2rem;
		text-align: center;
	}

	.totalRow>span:nth-child(-n+3) {
		flex: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.totalRow>span:nth-child(4) {
		flex: 1;
	}

	.snacks {
		color: #E31436;
		font-size: 1.8rem;
	}
</style>
