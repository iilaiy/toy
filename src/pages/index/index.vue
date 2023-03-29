<template>
	<view class="content">
		<view class="header">
			<!-- 搜索 -->
			<InputGroup></InputGroup>
		</view>
		<!-- 轮播图 -->
		<IndexBanner :bannerList="bannerList"></IndexBanner>
		<!-- 菜单 -->
		<view class="menu">
			<IndexMenu :menuList="menuList"></IndexMenu>
		</view>
		<view class="main">
			<!-- 广告 -->
			<IndexAdvertisement></IndexAdvertisement>
			<!-- 爆款补货 -->
			<IndexReplenishment :replenishmentList="replenishmentList"></IndexReplenishment>
			<!-- 热门款式 -->
			<IndexHot></IndexHot>
		</view>
		<!-- module -->
		<!-- 菜单 -->
		<SwiperTab :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></SwiperTab>
		<view class="moduleWrap">
			<!-- 滑动|点击 切换组件 -->
			<IndexSubject></IndexSubject>
		</view>
	</view>
</template>

<script>
	import InputGroup from "./components/InputGroup"
	import IndexBanner from "./components/IndexBanner"
	import IndexMenu from "./components/IndexMenu"
	import IndexAdvertisement from "./components/IndexAdvertisement"
	import IndexReplenishment from "./components/IndexReplenishment"
	import IndexHot from './components/IndexHot'
	import IndexSubject from './components/IndexSubject'
	import SwiperTab from '@/components/SwiperTab'
	export default {
		// https://www.uviewui.com/components/swiper.html
		// https://mall.fkw.com/model/1/1001-33-8878.html
		// https://www.shuzhiduo.com/A/6pdDw9aD5w/
		data() {
			return {
				bannerList: [
					{
						imgPath: '/static/img/AD0I6LmFDhACGAAgyseGlQYokOSutgcw7gU46AI.jpg',
					},
					{
						imgPath: '/static/img/AD0I6LmFDhACGAAgyseGlQYoko3p9wUw7gU46AI.jpg',
					},
				],
				menuList: [
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAgo8mGlQYooKCNnQUwXjhz.png',
						text: '乐高积木',
						hrefs: '/pages/buildingBlocks/buildingBlocks',
					},
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAg0cqGlQYoqaLQ0wMwXjhr.png',
						text: '雕像玩偶',
						hrefs: '/pages/statue/statue'
					},
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAgwMqGlQYosNSGsgMwYThq.png',
						text: '盲盒玩具',
						hrefs: '/pages/blindBox/blindBox'
					},
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAgr8qGlQYozOSF3gEwXjhq.png',
						text: '玩具手办',
						hrefs: '/pages/handHandling/handHandling'
					},
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAg9cmGlQYosMfE2wMwbThp.png',
						text: '潮流玩具',
						hrefs: '/pages/fashionToy/fashionToy'
					},
				],
				replenishmentList: [
					{
						id: 1100,
						headImgPath: '/static/img/AD0I6LmFDhAEGAAgi92GlQYorNz6pwEwkgU44QI.png',
						title: '深林之子的禅座日记',
						price: '188',
					},
					{
						id: 1101,
						headImgPath: '/static/img/AD0I1PzZDRAEGAAg7N7MkAYoru_tgAcw1QE4_gE.png',
						title: '盲盒手办礼物女不支持系列',
						price: '120',
					},
					{
						id: 1102,
						headImgPath: '/static/img/AD0I6LmFDhAEGAAg3eCGlQYo89eurgEw1gE4hAI.png',
						title: '巫妖阿尔萨斯',
						price: '698',
					},
					{
						id: 1103,
						headImgPath: '/static/img/AD0I6LmFDhAEGAAgzeGGlQYorq7ysgYw1wE4hAI.png',
						title: '甜蜜妖怪盲盒',
						price: '69',
					},
					{
						id: 1104,
						headImgPath: '/static/img/AD0I6LmFDhAEGAAg3OGGlQYo3Pnm5QYw1gE4hAI.png',
						title: '淘气骷髅人',
						price: '176',
					},
					{
						id: 1105,
						headImgPath: '/static/img/AD0I1PzZDRAEGAAg4d7MkAYosPHb9Acw1AE4_gE.png',
						title: 'Hellokitty女孩公仔摆件手办',
						price: '120',
					},
				],
				tabIndex:0,// 选中的
				tabBars:[
				  { name:"猜你喜欢",left: null, width: null },
				  { name:"乐高积木",left: null, width: null },
				  { name:"雕像玩偶",left: null, width: null },
				  { name:"盲盒玩具",left: null, width: null },
				  { name:"玩具手办",left: null, width: null },
				  { name:"潮流玩具",left: null, width: null },
				]
			}
		},
		components: {
			InputGroup,
			IndexBanner,
			IndexMenu,
			IndexAdvertisement,
			IndexReplenishment,
			IndexHot,
			IndexSubject,
			SwiperTab,
		},
		onLoad() {

		},
		methods: {
			//接受子组件传过来的值点击切换导航
            tabtap(index){
                this.tabIndex = index;
            },
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.header {
			width: 94%;
			margin: 20rpx auto;
		}
		.menu {
			margin: 25rpx 0 0 0;
		}
		.main {
			width: 92%;
			margin: 0 auto;
		}
	}
</style>
