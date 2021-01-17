<template>
	<div class="shopList">

		<el-row :gutter="10">
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="24">
				<el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin:1rem 1rem;" v-for="item in booklist" :key="item.name">
					<div class="divcard">
						<div class="bookleft">
							<a href="#"><img :src="item.src" class="sortImg"></a>
						</div>
						<div class="bookright">
							<p class="booknames">
								<a href="#">{{item.name}}</a>
							</p>
							<p class="bookauthors">
								<a href="#">{{item.author}}</a> <span>/ 2019-01-01 /</span> <a href="#">中国华侨出版社</a>
							</p>
							<p class="bookprice">
								<span>¥{{item.newPrice}}</span>
								<span>(3.2折)</span>
								<span>定价:¥{{item.oldPrice}}</span>
							</p>
							<p>
								<el-button class="priceCount">4折封顶 折上8折</el-button>
							</p>
							<template v-if="item.det.length<120">
								<p class="bookdet">{{item.det}}</p>
							</template>
							<template v-else>
								<p class="bookdet">{{item.det.slice(1,120)}}...</p>
							</template>
							<p>
								<el-button class="shopCar" @click="addShopCar(item.name)">添加购物车</el-button>
								<el-button class="collects" @click="addCollect(item)">收藏</el-button>
							</p>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	let data;
	export default {
		data() {
			return {
				shopCar: null,
				booklist: '',
				favorites:[]
			};
		},
		mounted() {
			//如果收藏夹不为空，则给favorites变量赋值；否则初始化收藏夹
			if(localStorage.getItem('Favorites')){
				this.favorites=JSON.parse(localStorage.getItem('Favorites'));
			}else{
				localStorage.setItem('Favorites',JSON.stringify(this.favorites));
			}
			//console.log(this.$route.path);
			data = JSON.parse(localStorage.getItem('bookData'));
			data.forEach((item,index)=>{
				if((item.type=='wenxue')&&(this.$route.path=='/wenxue')){
					this.booklist = data[index].booklist;
					//console.log(this.booklist);
				}
				else if((item.type=='qingchunwenxue')&&(this.$route.path=='/qingchunwenxue')){
					this.booklist = data[index].booklist;
					//console.log(this.booklist);
				}
					
				else if((item.type=='fiction')&&(this.$route.path=='/fiction')){
					this.booklist = data[index].booklist;
					//console.log(this.booklist);
				}
					
			})
			//console.log(data.shopCar);
			this.shopCar = JSON.parse(localStorage.getItem('shopCar'));
			//console.log(this.data);
			//console.log(data.data().allBook[0].booklist)
			// axios.request('/allBook.json').then(res => {
			// 	this.booklist=res.data.booklist;
			// 	this.booklist.forEach(item => {
			// 		//console.log(item.src)
			// 	});
			// })
		},
		watch: {
			$route() {
				data.forEach((item,index)=>{
					if((item.type=='wenxue')&&(this.$route.path=='/wenxue')){
						this.booklist = data[index].booklist;
						//console.log(this.booklist);
					}
					else if((item.type=='qingchunwenxue')&&(this.$route.path=='/qingchunwenxue')){
						this.booklist = data[index].booklist;
						//console.log(this.booklist);
					}
						
					else if((item.type=='fiction')&&(this.$route.path=='/fiction')){
						this.booklist = data[index].booklist;
						//console.log(this.booklist);
					}
						
				})
			}
		},
		methods: {
			addCollect(book){
				let flag=0;
				let nowDate = this.getDate();
				if(!this.favorites.length==0){
					this.favorites.forEach((item)=>{
						if(item.name===book.name){
							this.$message({
								showClose:true,
								type:'warning',
								message:'已经收藏过了，看看别的吧！'
							})
							flag=1;
						}
					})
					if(flag===0){
						this.$message.success({
							showClose:true,
							type:'success',
							message:'已收藏'
						});
						//给日期赋值
						book.date=nowDate;
						this.favorites.push(book);
					}
				}else{
					this.$message.success({
						showClose:true,
						type:'success',
						message:'已收藏'
					});
					//给日期赋值
					book.date=nowDate;
					this.favorites.push(book);
				} 
				localStorage.setItem('Favorites',JSON.stringify(this.favorites))
				//console.log(JSON.parse(localStorage.getItem('Favorites')));
			},
			addShopCar(name) {
				this.$message.success('添加成功！');
				let thisName = name;
				let flag = 0;
				let nowDate = this.getDate();
				//console.log(thisName);
				//console.log(this.shopCar);
				this.booklist.forEach(item => {
					if (item.name === thisName) {
						if (this.shopCar.length > 0) { //购物车非空，遍历
							this.shopCar.some(function(v) {
								if (v.name === thisName) {
									item.date=nowDate;
									v.num++;
									flag = 1;
									return true;
								}
							})
							if (flag === 0) { //如果购物车没有，则添加该商品
								item.date=nowDate;
								item.num++;
								console.log(111)
								this.shopCar.push(item);
							}
						} else { //如果购物车为空，则添加该商品
							item.date=nowDate;
							item.num++;
							//console.log(item);
							this.shopCar.push(item);
						}
					}
				});
				//console.log(this.shopCar);
				//localStorage.clear();
				localStorage.setItem('shopCar', JSON.stringify(this.shopCar))
				//console.log(JSON.parse(localStorage.getItem('shopCar')))
			},
			getDate(){
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
				return nowDate;
			}
		}
	}
</script>

<style scoped="">
	@import url("../../assets/responsiveLayout.css");
	@import url("../../assets/card.css");

	/* 图片样式 */
	.sortImg {
		-o-object-fit: contain;
		object-fit: contain;
		margin: 2rem auto;
		display: block;
	}

	.shopList {
		width: 100%;
		padding: 0 0.5rem;
	}

	.booknames>a {
		color: #0080cc;
	}

	.booknames>a:hover {
		color: #e60000;
	}

	.bookauthors>span {
		color: #999;
	}

	.bookauthors>a {
		color: #999;
	}

	.bookauthors>a:hover {
		color: #e60000;
		text-decoration: underline;
	}

	.bookprice>span:nth-child(1) {
		font-size: 1.2rem;
		color: #E60000;
		margin: 0 0.3rem;
	}

	.bookprice>span:nth-child(2) {
		font-size: 0.8rem;
		color: #666;
		margin: 0 0.3rem;
	}

	.bookprice>span:nth-child(3) {
		font-size: 0.8rem;
		color: #999;
		margin: 0 0.3rem;
	}

	/* card主体容器 */
	.divcard {
		height: 18rem;
		text-align: center;
	}

	/* 图片容器 */
	.bookleft {
		display: inline-block;
		height: 100%;
		width: 22%;
	}

	/* card右侧 */
	.bookright {
		float: right;
		width: 50rem;
		text-align: left;
		margin-left: 5px;
	}

	/* 简介 */
	.bookdet {
		color: #666;
	}

	/* 按钮 */
	.priceCount {
		background-color: rgba(230, 0, 0, 0.7);
		color: #fff;
		border-radius: 6px;
	}

	.priceCount:hover {
		background-color: rgba(230, 0, 0, 0.7);
		color: #fff;
	}

	.shopCar {
		background-color: rgba(230, 0, 0, 0.7);
		color: #fff;
		border-radius: 6px;
	}

	.collects {
		border: 1px solid rgba(120, 120, 120, 1);
		color: rgb(120, 120, 120);
		border-radius: 6px;
	}

	.collects:hover {
		border: 1px solid rgba(120, 120, 120, 1);
		color: rgb(120, 120, 120);
	}
</style>
