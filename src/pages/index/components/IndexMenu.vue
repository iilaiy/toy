<template>
	<view class="menu-container">
		<view class="menu-item" v-for="(item, index) in menuList" :key="index">
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
		}
	}
</script>

<style lang="scss" scoped>
	.menu-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.menu-item {
			width: calc(100% / 5);
			i {
				display: block;
				margin: 0 auto;
				width: 90rpx;
				height: 100rpx;
			}
			image {
				width: 100%;
				height: 100%;
			}
			text {
				text-align: center;
				display: block;
				font-size: 25rpx
			}
		}
	}
</style>