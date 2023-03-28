<template>
	<view class="advertisement">
		<view class="left">
			<view class="left-bg bg">
				<image src="@/static/img/AD0I6LmFDhAEGAAgmMyGlQYohL-YuQQwygI46QI.png"></image>
			</view>	
			<text class="title">
				主打IP产品
			</text>
			<text class="text">
				限时返场，给你好的
			</text>
		</view>
		<view class="right">
			<view class="box">
				<view class="b-bg bg">
					<image src="@/static/img/AD0I6LmFDhAEGAAgxMyGlQYo2Pn77gcw1AI4qwE.png"></image>
				</view>
				<text class="title">
					盲拆惊喜
				</text>
				<text class="text">
					多重大礼等你来
				</text>
			</view>
			<view class="box">
				<view class="b-bg bg">
					<image src="@/static/img/AD0I6LmFDhAEGAAg8MyGlQYooM-dzAIw1AI4qwE.png"></image>
				</view>
				<text class="title">
					主打IP产品
				</text>
				<text class="text">
					应有尽有
				</text>
			</view>
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
	margin: 30rpx auto;
	height: 380rpx;
	display: flex;
	justify-content: space-between;
	.left, .right {
		width: 49%;
		.title {
			display: block;
		}
		.text {
			font-size: 25rpx;
		}
		.bg {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
		}
	}
	.left , .right .box {
		padding: 35rpx;
		box-sizing: border-box;
		position: relative;
		border-radius: 30rpx;
		color: #c58b47;
		.text {
			color: #c5ac8e;
		}
	}
	.right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.box {
			width: 100%;
			height: 49%;
		}
		.box:first-child {
			color: #537da0;
			.text {
				color: #84a8c6;
			}
		}
		.b-bg {
			height: 100%;
		}
	}
}
</style>