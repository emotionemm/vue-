<template>
	<div class="listOne">
		<el-row :gutter="36">
			<el-col :span="6" v-for="item in booklist" :key="item.src">
				<div class="grid-content bg-purple">
					<el-row>
						<el-col>
							<el-card :body-style="{ padding: '0px'}" shadow="hover">
								<div class="bookImg">
									<img :src="item.src" class="image">
								</div>
								<div style="padding:14px;background-color:#edf8ff;">
									<a class="bookname" href="#"><span>{{item.name}}</span></a>
									<div class="bottom clearfix">
										<time class="time">{{item.author}}</time>
									</div>
									<div>
										<span class="newGoodsPrice_now">{{item.newPrice}}</span>&nbsp;&nbsp;
										<span class="newGoodsPrice2_old">{{item.oldPrice}}</span>
										<el-button type="text" class="button">查看</el-button>
									</div>
								</div>
							</el-card>
						</el-col>
					</el-row>
				</div>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				booklist:[
					{
						src:require('../../../public/index/wenxue/fiction/daozhiyangmian.jpg'),
						name:'刀之阳面-刀尖/中共王牌特',
						author:'麦家 著',
						newPrice:'￥9.8',
						oldPrice:'￥29.8'
					},
					{
						src:require('../../../public/index/wenxue/fiction/telafunikejishi.jpg'),
						name:'特拉夫尼克纪事/诺贝尔文',
						author:'[南斯拉夫]伊沃·安德里奇',
						newPrice:'￥22.1',
						oldPrice:'￥65.0'
					},
					{
						src:require('../../../public/index/wenxue/fiction/luoshengmen.jpg'),
						name:'罗生门',
						author:'[日]芥川龙之介 著，楼适',
						newPrice:'¥13.7',
						oldPrice:'¥28.0'
					},
					{
						src:require('../../../public/index/wenxue/fiction/changjiangdenver.jpg'),
						name:'长江的女儿-现代小说体',
						author:'王庸声 著',
						newPrice:'¥15.7',
						oldPrice:'¥49.0'
					},
					{
						src:require('../../../public/index/wenxue/fiction/cunshanduojia.jpg'),
						name:'村山多加',
						author:'神奈川 著',
						newPrice:'¥14.5',
						oldPrice:'¥45.0'
					},
					{
						src:require('../../../public/index/wenxue/fiction/xinchaonvlang.jpg'),
						name:'新潮女郎与哲学家/菲茨杰',
						author:'[美]F·S·菲茨杰拉德 著',
						newPrice:'¥14.1',
						oldPrice:'¥38.0'
					},
					{
						src:require('../../../public/index/wenxue/fiction/zailushang.jpg'),
						name:'在路上/“垮掉的一代”灵',
						author:'[美]杰克·凯鲁亚克 著,秦',
						newPrice:'¥22.5',
						oldPrice:'¥46.0'
					},
					{
						src:require('../../../public/index/wenxue/fiction/outyuejie.jpg'),
						name:'OUT:越界',
						author:'[日本]桐野夏生 著,林敏生',
						newPrice:'¥17.0',
						oldPrice:'¥53.0'
					},
				]		
			};
		}
	}
</script>

<style scoped="">
	@import url("../../assets/Layout.css");
	@import url("../../assets/card.css");
	.listOne{
		margin-bottom:10px;
		border:1px solid #d1d1d1;
		z-index:-6;
	}
	.bookname{
		color:#000;
	}
	.bookname>span:hover{
		color:#E60000;
	}
</style>
