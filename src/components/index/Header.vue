<template>
	<div>
		<div class="topBar">
			<div class="topBar_inner">
				<div class="loginArea">
					<b>欢迎光临本书店&nbsp;请</b>
					<a href="#">登录</a>
					<span>|</span>
					<a href="#" traget="_blank">注册</a>
				</div>
				<div class="dynamic">
					<a href="#" targe="_blank">
						<span>新店开业，全场大酬宾!</span>
					</a>
				</div>
				<div class="webTool">
					<ul>
						<li>
							<div class="dt">
								<a href="/#/shop" target="_blank">购物车</a>
							</div>
						</li>
						<li>
							<div class="dt">
								<a href="#/myOrder" target="_blank">我的订单</a>
							</div>
						</li>
						<li class="drop" onmouseover="myCount_over()" onmouseleave="myCount_leave()">
							<div class="dt">
								<a href="#" target="_blank">我的账户</a>
								<i class="mdui-icon material-icons">&#xe5cf;</i>
							</div>
							<div class="dt_layer">
								<a href="#/favorites" target="_blank">我的收藏夹</a>
								<a href="#" target="_blank">账户余额</a>
								<a href="#" target="_blank">我的优惠券</a>
								<a href="#" target="_blank">账户余额</a>
								<a href="#" target="_blank">收货地址</a>
								<a href="#" target="_blank">我的消息</a>
							</div>
						</li>
						<li>
							<div class="dt">
								<a href="#" target="_blank">帮助中心</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div>
			<div class="searchBar">
				<div class="logo">
					<a href="#">
						<img src="../../assets/163logo.gif">
					</a>
				</div>
				<div class="searchArea">
					<div class="clearfix">
						<div class="searchInput">
							<div id="app" class="inputWrap">
								<el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
									<el-select v-model="select" slot="prepend" placeholder="请选择">
										<el-option label="书名" value="1"></el-option>
										<el-option label="作者" value="2"></el-option>
										<el-option label="出版社" value="3"></el-option>
										<el-option label="ISBN" value="4"></el-option>
									</el-select>
									<el-button slot="append" icon="el-icon-search"></el-button>
								</el-input>
							</div>
						</div>
						<div class="inputWrap_right">
							<a href="" style="color:red;">高级搜索</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header_three">
			<ul class="header_three_ul">
				<li id="header_three_li">
					<i id="header_three_i1" class="mdui-icon material-icons">&#xe3c7;</i>
					<a href="" style="color:white;">全部商品分类</a>
					
				</li>
				<li>
					<a href="/#/index">首页</a>
				</li>
				<li>
					<a href="/#/index">电子书</a>
				</li>
				<li>
					<a href="">畅销榜</a>
				</li>
				<li>
					<a href="/#/index">五⭐书</a>
				</li>
				<li>
					<a href="/#/shop">购物车</a>
				</li>
				<li>
					<a href="#/favorites">我的收藏</a>
				</li>
				<li>
					<a href="#/myOrder">我的订单</a>
				</li>
			</ul>
		</div>
	</div>

</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				input3: '',
				select: '',
				vmMsg: [{
						title: '欢迎进入图书管理系统',
						msg: '读过一本好书，像交了一个益友。——臧克家'
					},
					{
						title: '看点绿色给眼睛放松一下',
						msg: '不读书的人，思想就会停止。——狄德罗'
					},
					{
						title: '明日复明日，明日何其多，我生待明日，万事成蹉跎',
						msg: '凡读无益之书，皆是玩物丧志。——（清）王豫'
					},
					{
						title: '建立自我，追求无我。',
						msg: '进学致和，行方思远。——字严'
					},
					{
						title: '有智者立长志，无志者长立志。',
						msg: '不怨天，不尤人，下学而上达。——《论语》'
					}
				]
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../assets/Nav_bar.css");
	@import url("../../assets/ElementInput.css");
</style>
