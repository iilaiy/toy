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
			<IndexHot :hotList="hotList"></IndexHot>
		</view>
		<!-- module -->
		<!-- 菜单 -->
		<SwiperTab :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></SwiperTab>
		<scroll-view class="moduleWrap" scroll-y>
			<!-- (滑动)|点击 切换组件数据 --><!-- @tabtap="touchTab" -->
			<IndexSubject :moduleData="cmpData" ></IndexSubject>
		</scroll-view>
		<view class="main">
			<!-- 店铺信息 -->
			<IndexShop></IndexShop>
		</view>
	</view>
</template>

<script>
	let jsonData = require('@/data/commodity.js')
	import InputGroup from "./components/InputGroup"
	import IndexBanner from "./components/IndexBanner"
	import IndexMenu from "./components/IndexMenu"
	import IndexAdvertisement from "./components/IndexAdvertisement"
	import IndexReplenishment from "./components/IndexReplenishment"
	import IndexHot from './components/IndexHot'
	import IndexSubject from './components/IndexSubject'
	import IndexShop from './components/IndexShop'
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
					}
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
				tabIndex: 0,// 选中的(tab索引)
				tabBars:[
				  { name:"猜你喜欢", categoryId: 11, left: null, width: null },
				  { name:"乐高积木", categoryId: 22, left: null, width: null },
				  { name:"雕像玩偶", categoryId: 33, left: null, width: null },
				  { name:"盲盒玩具", categoryId: 44, left: null, width: null },
				  { name:"玩具手办", categoryId: 55, left: null, width: null },
				  { name:"潮流玩具", categoryId: 66, left: null, width: null },
				],
				/* 此处深拷贝一份数据（以防数据丢失） */
				commodityList: [...jsonData.commodityList.commodityData],	// 所有商品
				// commodityList: [],
				hotList: [],	// 热门商品
				cmpData: [],	// 组件数据
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
			IndexShop,
			SwiperTab,
		},
		onLoad() {

		},
		methods: {
			//接受子组件传过来的值点击切换导航
            tabtap(index){
				/* 切换组件数据 */
                this.tabIndex = index;
            },
			/* touchTab(type) {
				switch(type) {
					case 1: 
						if (this.tabIndex<this.tabBars.length-1) this.tabIndex++
						break
					case -1:
						if (this.tabIndex>0) this.tabIndex--
						break
				}
			}, */
			/* 过滤组件数据 */
			filterCmpData(categoryId) {
				this.cmpData.length = 0
				
				if (categoryId === 0) {
					// recommend
					this.commodityList.map(item => {
						if (item.recommend) {
							this.cmpData.push(item)
						}
					})
					return
				}
				
				categoryId = this.tabBars[categoryId-1].categoryId
				
				this.commodityList.map(item => {
					if (item.categoryId === categoryId) {
						this.cmpData.push(item)
					}
				})
				// console.log(this.cmpData);
			},
			filterHot(data) {
				if (data.length === 0) return []
				data.sort((val , val2) => {
					return val2.salesVolume - val.salesVolume
				})
				this.hotList = data.splice(0, 2)
				// console.log(this.hotList);
			},
			async getCommodity() {
				const res = await this.$myRequest({
					url: '/api/commodity.json',
				})
				// console.log(res);
				if (res.data.data) {
					this.commodityList = res.data.data.commodityData
					this.filterHot(res.data.data.commodityData)
					this.filterCmpData(this.tabIndex)
				}
				return res
			}
		},
		created() {
			// this.getCommodity()
			/* 此处深拷贝一份数据传递（以防数据丢失）-（函数内涉及了splice方法 ） */
			this.filterHot([...this.commodityList])
			// this.filterHot(this.commodityList)
			this.filterCmpData(this.tabIndex)
		},
		watch: {
			tabIndex(val) {
				/* 监听当前的tab，改变不同组件的数据 */
				this.filterCmpData(val)
			}
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
		.moduleWrap {
			/* 控制分类模块组件渲染的区域高度 */
			max-height: 1000rpx;
		}
	}
</style>
