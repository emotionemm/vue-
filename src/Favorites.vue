<template>
	<div class="favorite">
		<el-table ref="multipleTable" :data="favorites" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="name" label="商品名称" width="300">
			</el-table-column>
			<el-table-column prop="oldPrice" label="原价" width="160" sortable>
				<template slot-scope="scope">
					￥{{scope.row.oldPrice.toFixed(2)}}
				</template>
			</el-table-column>
			<el-table-column prop="newPrice" label="售价" width="160" sortable>
				<template slot-scope="scope">
					￥{{scope.row.newPrice.toFixed(2)}}
				</template>
			</el-table-column>
			<el-table-column prop="save" label="节省了" width="160" sortable>
				<template slot-scope="scope">
					￥{{(scope.row.oldPrice-scope.row.newPrice).toFixed(2)}}
				</template>
			</el-table-column>
			<el-table-column prop="date" label="存入日期" width="180" sortable>
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>

			<el-table-column prop="isPay" label="是否购买" width="120" show-overflow-tooltip>
				<template slot-scope="scope">
					<span v-if="scope.row.isPay">
						已购买
					</span>
					<span v-else>
						未购买
					</span>
				</template>
			</el-table-column>
			<el-table-column label="处理" width="200">
				<template slot-scope="scope">
					<el-button type="warning" circle @click="addShopCar(scope.row)">购买</el-button>
					<el-button type="danger" circle @click="deleteCollect(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div style="margin-top: 20px">
			<el-button @click="ifSelect">加入购物车</el-button>
			<el-button @click="toggleSelection()">取消选择</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				multipleSelection: [],
				favorites: [],
				myOrder: null
			}
		},
		//创建实例后执行，初始化总金额
		mounted() {
			//获取订单数据
			this.myOrder = JSON.parse(localStorage.getItem('myOrder'));
			//如果收藏夹不为空，则给favorites变量赋值；否则初始化收藏夹
			if (localStorage.getItem('Favorites')) {
				this.favorites = JSON.parse(localStorage.getItem('Favorites'));
			} else {
				localStorage.setItem('Favorites', JSON.stringify(this.favorites));
			}
			//判断收藏夹中的书籍的属性isPay是否为1（已支付）
			let flag = 0;
			this.favorites.forEach((it) => {
				this.myOrder.forEach((ite) => {
					ite.booklist.forEach((item) => {
						if (item.name === it.name) {
							it.isPay = 1;
							flag = 1;
						}
					})
				})
				if (flag === 0)
					it.isPay = 0;
			})
		},
		methods: {
			// 购买（添加到购物车）
			addShopCar(goods) {
				//判断购物车中是否含有该商品
				let flag = 0;
				if (goods.isPay === 1) {
					this.$alert('已经购买过了,即将前往订单页面', '提示', {
						confirmButtonText: '确定',
						callback: action => {
							location.href = '#/myOrder';
							console.log(action);
						}
					});
				} else {
					let asd = JSON.parse(localStorage.getItem('shopCar'));
					asd.forEach((item) => {
						if (item.name === goods.name) {
							flag = 1;
						}
					})
					if (flag === 0) {
						asd.push(goods);
						localStorage.setItem('shopCar', JSON.stringify(asd));
						//-------------同一本书会重复添加的bug--------------//
						this.$message.success('添加成功！');
						location.href = '#/shop';
					} else {
						this.$alert('已经在购物车中了,即将前往购物车页面', '提示', {
							confirmButtonText: '确定',
							callback: action => {
								location.href = '#/shop';
								console.log(action);
							}
						});
					}
				}
			},
			// 删除（从收藏夹移除）
			deleteCollect(goods) {
				console.log(this.favorites);
				this.$alert('确定要移除吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.favorites.forEach((item, index) => {
						if (item.name === goods.name) {
							this.favorites.splice(index, 1);
							localStorage.setItem('Favorites', JSON.stringify(this.favorites));
						}
					});
				})
			},
			ifSelect() {
				if (!this.multipleSelection.length)
					this.$alert('请选择商品', '消息提示', {
						confirmButtonText: '确定'
					});
				else {
					let asd = JSON.parse(localStorage.getItem('shopCar'));
					let already = ' ';
					this.multipleSelection.some(function(v) {
						asd.forEach((item) => {
							if (item.name === v.name) {
								already += v.name + ' ';
							}
						});
					})
					console.log(already.length);
					if (already.length != 1) {
						this.$alert('商品名为:' + already + '已在购物车内,是否前往购物车', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							location.href = '#/shop/Car';
						}).catch(() => {
							return false;
						})
					} else {
						let asd=JSON.parse(localStorage.getItem('shopCar'));
						//asd.push(this.multipleSelection);
						if(asd.length===0){
							localStorage.setItem('shopCar',JSON.stringify(this.multipleSelection));
							this.$message.success('添加成功！');
						}else{
							asd.push(this.multipleSelection);
							console.log(asd);
							localStorage.setItem('shopCar',JSON.stringify(this.multipleSelection));
							this.$message.success('添加成功！');
						}
					}
				}
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		}
	}
</script>

<style>
	.favorite {
		margin-left: 19rem;
		margin-bottom: 5rem;
		padding: 10px 10px;
		width: 70.5%;
		height: 56rem;
	}
</style>
