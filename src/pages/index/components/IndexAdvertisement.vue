<template>
	<view class="advertisement">
		<view class="left">
			<view class="left-bg"></view>	
			<text class="title">
				主打IP产品
			</text>
			<text class="text">
				限时返场，给你好的
			</text>
		</view>
		<view class="right">
			
		</view>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.advertisement {
	display: flex;
	justify-content: space-between;
	.left, .right {
		width: 48%;
		height: 350rpx
	}
	.left {
		position: relative;
		.left-bg {
			width: 100%;
			height:100%;
			left: 0;
			top: 0;
			position: absolute;
			background-image: url('@/static/img/AD0I6LmFDhAEGAAgmMyGlQYohL-YuQQwygI46QI.png');
			background-size: cover;
			z-index: -1;
		}
	}
}
</style>