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
		<!--  -->
		<IndexAdvertisement></IndexAdvertisement>
	</view>
</template>

<script>
	import InputGroup from "./components/InputGroup"
	import IndexBanner from "./components/IndexBanner"
	import IndexMenu from "./components/IndexMenu"
	import IndexAdvertisement from "./components/IndexAdvertisement"
	export default {
		// https://mall.fkw.com/model/1/1001-33-8878.html
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
						text: '乐高积木'
					},
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAg0cqGlQYoqaLQ0wMwXjhr.png',
						text: '雕像玩偶'
					},
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAgwMqGlQYosNSGsgMwYThq.png',
						text: '盲盒玩具'
					},
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAgr8qGlQYozOSF3gEwXjhq.png',
						text: '玩具手办'
					},
					{
						iconPath: '/static/img/icon/AD0I6LmFDhAEGAAg9cmGlQYosMfE2wMwbThp.png',
						text: '潮流玩具'
					},
				],
			}
		},
		components: {
			InputGroup,
			IndexBanner,
			IndexMenu,
			IndexAdvertisement,
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.header {
			width: 94%;
			margin: 30rpx auto 20rpx auto;
		}
		.menu {
			margin: 25rpx 0 0 0;
		}
	}
</style>
