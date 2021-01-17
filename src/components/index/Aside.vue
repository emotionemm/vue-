<template>
	<div class="asides">
		<div class="header_three_left">
			<div class="category_inner">
				<ul class="category_list">
					<li class="category_listnone" onmouseover="mouse_over(0)" onmouseleave="mouse_leave(0)">
						<div class="list_one">
							<h3 class="list_h3">
								<a href="#/wenxue">文学</a>
							</h3>
							<p>
								<a href="#/fiction">小说</a>
								<a href="#/qingchunwenxue">青春文学</a>
								<a href="#">中国散文</a>
								<a href="#">外国散文</a>
								<a href="#">悬疑推理</a>
								<a href="#">文学理论</a>
								<a href="#">文集</a>
								<a href="#">世界名著</a>
							</p>
							<i class="mdui-icon material-icons">&#xe5cf;</i>
						</div>
						<div class="list_one_act" onmouseover="mouse_over(0)" onmouseleave="mouse_leave(0)">
							<ul>
								<li>
									<h3 class="list_h3"><a href="#/fiction">小说</a></h3>
									<p>
										<a href="">外国小说</a>
										<span>|</span>
										<a href="">中国当代小说</a>
										<span>|</span>
										<a href="">中国古典小说</a>
										<span>|</span>
										<a href="">中国近现代小说</a>
										<span>|</span>
										<a href="">悬疑推理</a>
										<span>|</span>
										<a href="">科幻小说</a>
										<span>|</span>
										<a href="">世界名著</a>
										<span>|</span>
										<a href="">四大名著</a>
										<span>|</span>
										<a href="">作品集</a>
										<span>|</span>
										<a href="">更多</a>
									</p>
								</li>
								<li>
									<h3 class="list_h3"><a href="#/wenxue">文学</a></h3>
									<p>
										<a href="">外国诗歌</a>
										<span>|</span>
										<a href="">中国古诗词</a>
										<span>|</span>
										<a href="">中国现当代诗歌</a>
										<span>|</span>
										<a href="">外国散文</a>
										<span>|</span>
										<a href="">中国现当代散文</a>
										<span>|</span>
										<a href="">中国古代散文</a>
										<span>|</span>
										<a href="">文学理论</a>
										<span>|</span>
										<a href="">文集</a>
										<span>|</span>
										<a href="">戏剧</a>
										<span>|</span>
										<a href="">更多</a>
									</p>
								</li>
								<li>
									<h3 class="list_h3"><a href="#/qingchunwenxue">青春文学</a></h3>
									<p>
										<a href="">玄幻/科幻</a>
										<span>|</span>
										<a href="">悬疑/惊悚</a>
										<span>|</span>
										<a href="">叛逆/成长</a>
										<span>|</span>
										<a href="">爆笑/无厘头</a>
										<span>|</span>
										<a href="">校园</a>
										<span>|</span>
										<a href="">港台青春文学</a>
										<span>|</span>
										<a href="">外国青春文学</a>
										<span>|</span>
										<a href="">更多</a>
									</p>
								</li>
							</ul>
						</div>
					</li>
					
					<li class="category_listnone" onmouseover="mouse_over(1)" onmouseleave="mouse_leave(1)"></li>
					<li class="category_listnone" onmouseover="mouse_over(2)" onmouseleave="mouse_leave(2)"></li>
					<li class="category_listnone" onmouseover="mouse_over(3)" onmouseleave="mouse_leave(3)"></li>
					<li class="category_listnone" onmouseover="mouse_over(4)" onmouseleave="mouse_leave(4)"></li>
				</ul>
			</div>
			<div class="today_news"></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
	/* 分类列表样式 */
	.header_three_left{    
		position:absolute;
		top:11.95rem;
		left:19.05rem;
		width:11.2%;
		height:48rem;
		list-style: none;
	}
	/* 分类栏样式 */
	.category_inner{
		height:100%;
	}
	.category_list{
		display:flex;
		height:100%;
		flex-direction:column;
		padding-left:0;
		z-index:100;
	}
	.category_list>li{
		flex:1;
		position:relative;
		padding-left:.5rem;
		padding-top:.8rem;
		border-left:1px solid #e60000;
		border-right:1px solid #e60000;
		z-index:100;
	}
	#category_listHover{
		border-left: 2px solid #e60000;
		border-bottom: 2px solid #e60000;
		border-top: 2px solid #e60000;
		border-right:2px solid #fff;
		padding-left:.43rem;
		padding-top:0.7rem;
		z-index:100;
	}
	h3{
		margin: 0 0;
		padding-top: 8px;
	}
	.list_h3>a{
		color:red;
		font-size: 1.2rem;
		font-weight:normal;
	}
	.list_h3>a:hover{
		text-decoration:underline;
	}
	.list_one>p{
		position: relative;
		font-size:.8rem;
		margin-top:0px;
		line-height: 24px;
		padding-bottom: 10px;
		zoom: 1;
		overflow: hidden;
		margin-right: 11px;
		border-bottom: 1px dashed red;
	}
	.list_one>p>a{
		margin-right: 12px;
		color: #666;
		white-space: nowrap;
	}
	.list_one>i{
		position: absolute;
		top: 1.2rem;
		right: .8rem;
		font-size:1.2rem;
		color: #666666;
	}
	/* 隐藏分类栏样式 */
	.list_one_act{
		position:absolute;
		top:-4px;
		z-index:-10;
		left:99.8%;
		width:40rem;
		border:solid 2px #e60000;
		background-color:#fff;
		display:none;
	}
	.list_one_act>ul{
		display:flex;
		height:100%;
		flex-direction:column;
		padding-left:.6rem;	
	}
	.list_one_act>ul>li>h3{
		font-size:1.2rem;
		float: left;
		width: 7rem;
		line-height: 24px;
		color:red;
		font-weight:normal;
	}
	.list_one_act>ul>li>p{
		float: left;
		width: 30rem;
		overflow: hidden;
		line-height: 24px;
		font-size:.8rem;
		color: #666;
	}
	.list_one_act>ul>li>p>a{
		float: left;
		color: #666666;
		margin: 0.5rem;
		white-space: nowrap;
	}
	.list_one_act>ul>li>p>span{
		float: left;
		color: #d6d6d6;
	}
	.list_one_act>ul>li:not(:last-child){
		overflow: hidden;
		padding: 9px 0;
		border-bottom: 1px solid #f0f0f0;
	}
	
</style>
