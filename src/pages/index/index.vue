<template>
	<view class="content">
		<view class="header">
			<!-- 搜索 -->
			<InputGroup></InputGroup>
		</view>
		<!-- 轮播图 -->
		<IndexBanner :bannerList="bannerList"></IndexBanner>
		<!-- 菜单 -->
		<IndexMenu></IndexMenu>
	</view>
</template>

<script>
	import InputGroup from "@/components/InputGroup"
	import IndexBanner from "./components/IndexBanner"
	import IndexMenu from "./components/IndexMenu"
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
				]
			}
		},
		components: {
			InputGroup,
			IndexBanner,
			IndexMenu
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
	}
</style>
