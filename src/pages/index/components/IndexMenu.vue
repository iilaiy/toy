<template>
	<view class="menu-container">
		<view 
			class="menu-item" 
			v-for="(item, index) in menuList" 
			:key="index"
			@click="toPage(item)"
			>
			<i>
				<image :src="item.iconPath" mode="aspectFill"></image>
			</i>
			<text>{{ item.text }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			menuList: {
				type: Array
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			toPage(item) {
				uni.navigateTo({
					url: item.hrefs
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu-container {
		overflow-x: scroll;
		white-space: nowrap;
		.menu-item {
			display: inline-block;
			width: calc(100% / 5);
			i {
				display: block;
				margin: 0 auto;
				width: 90rpx;
				height: 100rpx;
			}
			text {
				text-align: center;
				display: block;
				font-size: 25rpx
			}
		}
	}
</style>