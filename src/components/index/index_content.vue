<template>
	<div class="yemian">
		<div class="scrollBar">
			<el-carousel height="14rem">
				<el-carousel-item v-for="item in vmMsg" :key="item.msg">
					<h3 class="small">{{ item.msg }}</h3>
					<h3>{{item.title}}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="conTabs">
			<div class="conTabsOne">
				<el-tabs style="padding-left:16px;padding-right:16px;">
					<el-tab-pane :label="item.type" class="elPane" v-for="item in conTabsOne" :key="item.type">
						<div class="newGoodes">
							<div class="new1">
								<div>
									<a href="#"><img :src="item.src"></a>
								</div>
								<div class="new1List">
									<div>
										<a href="#" class="blackRed_fir"><h3>{{item.name}}</h3></a>
									</div>
									<div>
										<span class="newGoodsPrice_now">{{item.newPri}}</span>&nbsp;&nbsp;
										<span class="newGoodsPrice2_old">{{item.oldPri}}</span>
									</div>
									<div>
										<p class="new1P">{{item.det}}</p>
									</div>
								</div>
							</div>
							<div class="new2">
								<div class="goodsList" v-for="items in item.list" :key="items.src">
									<div>
										<template v-if="items.det=='荒漠甘泉/蒋介石下令陪葬的奇书，风行东西方百年'">
											<a href="#"><img style="max-width: 70%;max-height: 100%;"
											:src="items.src" alt=""></a>
										</template>
										<template v-else>
											<a href="#"><img style="max-width: 100%;max-height: 100%;"
											:src="items.src" alt=""></a>
										</template>
									</div>
									<template v-if="item.type!='读者热评'">
										<div>
											<a href="#" class="blackRed_sec">{{items.det}}</a>
										</div>
									</template>
									<template v-else>
										<div>
											<a href="#" class="blackRed_sec">{{items.name}}</a>
										</div>
									</template>
									<div>
										<span class="newGoodsPrice_now">{{items.newPri}}</span>&nbsp;&nbsp;
										<span class="newGoodsPrice2_old">{{items.oldPri}}</span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
			<div class="conTabsTwo">
				<div class="TabsTwoHead">
					<span>图书畅销榜</span>
					<span><a href="#">更多>></a></span>
				</div>
				<div class="tabsTwodiv">
					<el-tabs type="border-card" style="height:29.4rem">
						<el-tab-pane v-for="item in bestSeller" :key="item.type" :label="item.type">
							<div class="TabsTwobody" v-for="items in item.list" :key="items.id">
								<template v-if="items.num<4">
									<span class="needRed">{{items.id}}</span>
									<span><a href="#">{{items.name}}</a></span>
								</template>
								<template v-else>
									<span>{{items.id}}</span>
									<span><a href="#">{{items.name}}</a></span>
								</template>
								<span><a href="#"><i class="mdui-icon material-icons">&#xe5cc;</i></a></span>
							</div>
							<div class="TabsTwofoot">
								<span><a href="#">查看完整表单>></a></span>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index_content',
		data() {
			return {
				conTabsOne:[
					{
						type:'新品特惠',
						src:require('../../../public/index/tab1/newSal/s1.jpg'),
						name:'气候改变历史',
						newPri:'¥11.9',
						oldPri:'¥35.0',
						det:'全球著名史学家亨廷顿、许倬云等关于气候改变历史的代表作，首次结集，独家引进出版。全书遴选了气候影响历史的代表性文章，话题涉及全球范围。'+
							'分别介绍世界气候的历史变化、气候对世界格局和文明形成的影响、气候对西方殖民历史的影响、中亚少数民族的大举迁移和气候变化之间的关系，以及气'+
							'候在复杂性社会瞬间崩塌过程中所起到的作用等。',
						list:[
							{
								class:'new2',
								src:require('../../../public/index/tab1/newSal/s2.jpg'),
								name:'',
								newPri:'¥21.0',
								oldPri:'¥60.0',
								det:'明代民歌集/多方搜集收录，活泼生动，明代文学遗珠'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/newSal/s3.jpg'),
								name:'',
								newPri:'¥14.4',
								oldPri:'¥48.0',
								det:'白云观访信录/民国道教小史，纪录观察道教日常生活'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/newSal/s4.jpg'),
								name:'',
								newPri:'¥22.0',
								oldPri:'¥58.0',
								det:'涂鸦与圣像:异托邦城市简史/十五年游历的旅行随笔'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/newSal/s5.jpg'),
								name:'',
								newPri:'¥15.3',
								oldPri:'¥45.0',
								det:'进涌的流泉/当今德国文坛大师马丁·瓦尔泽代表作'
							}
						]
					},
					{
						type:'本周精选',
						src:require('../../../public/index/tab1/thisWeek/s1.jpg'),
						name:'红楼梦诗词曲赋评注',
						newPri:'¥11.2',
						oldPri:'¥24.8',
						det:'著名红学家蔡义江先生“红学”名作，1979年初版后多次重印,总销量达70余万册。'+
							'全书收录了《红楼梦》诗、词、曲、赋、谜语、酒令、联额、古文、书札等等，作者评析了它们的背'+
							'后思想、艺术水平和文学语言，并利用脂评等重要研究资料，联系全书，对曹雪芹本来的艺术构思和'+
							'小说后半部佚稿的情节内容作了一番探讨、论述。',
						list:[
							{
								class:'new2',
								src:require('../../../public/index/tab1/thisWeek/s2.jpg'),
								name:'',
								newPri:'¥9.5',
								oldPri:'¥29.8',
								det:'卖书记/讲述卖书生涯的苦乐，剖析书业的现状与未来'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/thisWeek/s3.jpg'),
								name:'',
								newPri:'¥17.5',
								oldPri:'¥50.0',
								det:'月上荼蘼架:明代民歌札记/作者抄录民歌期间的笔记'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/thisWeek/s4.jpg'),
								name:'',
								newPri:'¥10.2',
								oldPri:'¥32.0',
								det:'忧郁的解剖/300年无数名家引用，堪称人类情感百科书'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/thisWeek/s5.jpg'),
								name:'',
								newPri:'¥16.3',
								oldPri:'¥48.0',
								det:'荒漠甘泉/蒋介石下令陪葬的奇书，风行东西方百年'
							}
						]
					},
					{
						type:'新书速递',
						src:require('../../../public/index/tab1/newBook/s1.jpg'),
						name:'沈从文的文学地图',
						newPri:'¥16.9',
						oldPri:'¥49.8',
						det:'本书由12位潜心研究沈从文的学者撰文，以沈丛文的人生'+
							'履历为线索，以凤凰、北京、上海、青岛、昆明、济南、咸宁等沈从文人生驿'+
							'站为节点，形成一个沈丛文的文学地图，全面解读、剖析、品味沈丛文的人生'+
							'及其各个时期的作品，具有一定的文学研究及藏书价值。',
						list:[
							{
								class:'new2',
								src:require('../../../public/index/tab1/newBook/s2.jpg'),
								name:'',
								newPri:'¥15.4',
								oldPri:'¥48.0',
								det:'从前慢-拾间-自由生活的记录者-001/文艺手账本'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/newBook/s3.jpg'),
								name:'',
								newPri:'¥31.6',
								oldPri:'¥98.7',
								det:'万物声/文艺插画笔记本，可描码听声'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/newBook/s4.jpg'),
								name:'',
								newPri:'¥9.9',
								oldPri:'¥29.0',
								det:'我不知道该如何像正常人那样生活/一本略丧的小说集'
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/newBook/s5.jpg'),
								name:'',
								newPri:'¥15.3',
								oldPri:'¥45.0',
								det:'1984/20世纪杰出的社会寓言小说！20世纪百佳英文小说'
							}
						]
					},
					{
						type:'读者热评',
						src:require('../../../public/index/tab1/hotCom/s1.jpg'),
						name:'耶稣的童年-诺贝尔文学奖得主J·M·库切作品',
						newPri:'¥17.6',
						oldPri:'¥36.0',
						det:'这是一个奇特而神秘的故事。一名寂寞男子，一个天才儿童，远渡重洋来到陌生国度。'+
							'他们被抹除记忆，篡改身份，同另一位不相干的女子组成“偶合家庭”，开始全新生活。小说带有喜剧性的'+
							'惊奇和震动，叙事织体仍是库切式的稠密，包含“新生活”所指涉的形而上学、伦理学、社会学、教育学等'+
							'多个母题。',
						list:[ 	
							{
								class:'new2',
								src:require('../../../public/index/tab1/hotCom/s2.jpg'),
								name:'多瑙河之旅',
								newPri:'¥18.6',
								oldPri:'¥58.0',
								det:''
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/hotCom/s3.jpg'),
								name:'宋拓怀仁集王书圣教序-历代',
								newPri:'¥4.9',
								oldPri:'¥10.0',
								det:''
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/hotCom/s4.jpg'),
								name:'子恺书话',
								newPri:'¥10.2',
								oldPri:'¥32.0',
								det:''
							},
							{
								class:'new2',
								src:require('../../../public/index/tab1/hotCom/s5.jpg'),
								name:'站在黄沙梁边上',
								newPri:'¥12.6',
								oldPri:'¥28.0',
								det:''
							}
						]
					}
				],
				bestSeller:[
					{
						type:'总榜',
						list:[
							{num:1,id:'01',name:'面纱'},
							{num:2,id:'02',name:'墨菲定律-每天学点心理学'},
							{num:3,id:'03',name:'明代民歌集'},
							{num:4,id:'04',name:'乡土中国'},
							{num:5,id:'05',name:'浮生六记'},
							{num:6,id:'06',name:'月亮与六便士'},
							{num:7,id:'07',name:'茶馆'},
							{num:8,id:'08',name:'不想活下去的孩子'},
							{num:9,id:'09',name:'民国往事'},
							{num:10,id:'10',name:'月上荼蘼架:明代民歌札记'}
						]
					},
					{
						type:'文学',
						list:[
							{num:1,id:'01',name:'面纱'},
							{num:2,id:'02',name:'浮生六记'},
							{num:3,id:'03',name:'月亮与六便士'},
							{num:4,id:'04',name:'茶馆'},
							{num:5,id:'05',name:'月上荼蘼架:明代民歌札记'},
							{num:6,id:'06',name:'凭一张地图'},
							{num:7,id:'07',name:'和我们女儿的谈话'},
							{num:8,id:'08',name:'1984'},
							{num:9,id:'09',name:'房思琪的初恋乐园'},
							{num:10,id:'10',name:'古文观止(上下)'}
						]
					},
					{
						type:'社科',
						list:[
							{num:1,id:'01',name:'墨菲定律-每天学点心理学'},
							{num:2,id:'02',name:'乡土中国'},
							{num:3,id:'03',name:'不想活下去的孩子'},
							{num:4,id:'04',name:'民国往事'},
							{num:5,id:'05',name:'浮生六记'},
							{num:6,id:'06',name:'人物传记:章太炎传'},
							{num:7,id:'07',name:'中国近代史'},
							{num:8,id:'08',name:'乡土中国-彩色插图版'},
							{num:9,id:'09',name:'中国历史的瞬间'},
							{num:10,id:'10',name:'我们内心的冲突'}
						]
					},
					{
						type:'少儿',
						list:[
							{num:1,id:'01',name:'鼻屎的藏身之处'},
							{num:2,id:'02',name:'父与子全集(全彩注音版)'},
							{num:3,id:'03',name:'彼得兔和他的朋友们(8册)'},
							{num:4,id:'04',name:'安徒生童话'},
							{num:5,id:'05',name:'捣蛋鬼丹尼斯'},
							{num:6,id:'06',name:'巨人矮人来做客'},
							{num:7,id:'07',name:'你没发现的大怪物'},
							{num:8,id:'08',name:'从大熊猫到雪豹'},
							{num:9,id:'09',name:'要是见到小猫咪'},
							{num:10,id:'10',name:'丹尼斯的宝贝老鼠'}
						]
					},
					{
						type:'艺术',
						list:[
							{num:1,id:'01',name:'明代民歌集'},
							{num:2,id:'02',name:'离席-为什么看电影'},
							{num:3,id:'03',name:'罗丹艺术论'},
							{num:4,id:'04',name:'汉画学'},
							{num:5,id:'05',name:'浪漫的中国艺术'},
							{num:6,id:'06',name:'五言诗硬笔字帖'},
							{num:7,id:'07',name:'一画一故事-读隋唐五代名画'},
							{num:8,id:'08',name:'中国楹联五体字典'},
							{num:9,id:'09',name:'京剧狮虎兽'},
							{num:10,id:'10',name:'中国京剧小史'}
						]
					},
					{
						type:'文教',
						list:[
							{num:1,id:'01',name:'物种起源'},
							{num:2,id:'02',name:'高老头'},
							{num:3,id:'03',name:'屠格涅夫中短篇小说选'},
							{num:4,id:'04',name:'极简动物图志'},
							{num:5,id:'05',name:'中华古历浅说'},
							{num:6,id:'06',name:'图解山海经(精装)'},
							{num:7,id:'07',name:'都德短篇小说选'},
							{num:8,id:'08',name:'Great! 植物学家的苗圃'},
							{num:9,id:'09',name:'朱自清散文集-珍藏版'},
							{num:10,id:'10',name:'女巫为什么爱养猫?:童话故事里的科学'}
						]
					},
					{
						type:'生活',
						list:[
							{num:1,id:'01',name:'世界地图册'},
							{num:2,id:'02',name:'地理啖蔗录'},
							{num:3,id:'03',name:'多瑙河之旅'},
							{num:4,id:'04',name:'我的第一本标本制作书'},
							{num:5,id:'05',name:'婴幼儿心理学'},
							{num:6,id:'06',name:'财富自由之路-你的第一本理财书'},
							{num:7,id:'07',name:'绍兴名城景点解读'},
							{num:8,id:'08',name:'酒鬼旅行指南'},
							{num:9,id:'09',name:'猫咪不是故意的——图解全阶段养猫宝典'},
							{num:10,id:'10',name:'谛听马拉喀什'}
						]
					}
				],
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
		}
	}
</script>

<style scoped="">
	@import url("../../assets/index_content.css");
</style>
