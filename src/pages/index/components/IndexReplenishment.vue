<template>
	<view class="replenishment">
		<view class="bg position">
			<image src="@/static/img/AD0I6LmFDhAEGAAg3tuGlQYo3sqG_gQwsgU4pgY.png"></image>
		</view>
		<view class="title">
			<text>爆款补货&nbsp;&nbsp;&nbsp;手慢无</text>
		</view>
		<view class="top">
			<view class="t-bg position">
				<image src="@/static/img/AD0I6LmFDhAEGAAgi92GlQYorNz6pwEwkgU44QI.png"></image>
			</view>
			<view class="t-bot">
				<view class="t-left">
					<view class="tit">深林之子的禅座日记</view>
					<view class="price">
						￥<text>188.00</text>
					</view>
				</view>
				<button class="t-button" type="default" plain="true">
					立即购买
				</button>
			</view>
		</view>
		<view class="b-bot">
			<scroll-view scroll-x="true" @scroll="scroll" class="scroll-container">
				<view class="scroll-item" v-for="index in 4">
					<view class="item-bg position">
						<image src="../../../static/img/AD0I6LmFDhAEGAAg3eCGlQYo89eurgEw1gE4hAI.png"></image>
					</view>
					<view class="item-bot">
						<view class="item-title tit">
							巫妖阿尔萨斯
						</view>
						<view class="item-price price">
							￥<text>698.00</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
	}
</script>

<style lang="scss" scoped>
	.replenishment {
		position: relative;
		.position {
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
		}
		.bg {
			height: 920rpx;
		}
		.title {
			color: #ffffff;
			font-size: 36rpx;
			text {
				display: block;
				padding-top: 35rpx;
				margin: 20rpx;
			}
		}
		.top {
			width: 96%;
			height: 360rpx;
			margin: 60rpx auto 15rpx auto;
			position: relative;
			.t-bot {
				width: 96%;
				left: 50%;
				transform: translateX(-50%);
				position: absolute;
				bottom: 4%;
				background-color: #ffffff;
				border-radius: 15rpx;
				box-sizing: border-box;
				padding: 15rpx;
				.t-left {
					float: left;
				}
				.t-button {
					float: right;
					width: 160rpx;
					border: none;
					height: 75rpx;
					background: url("@/static/img/icon/AD0I6LmFDhAEGAAg3d_GlQYosIOP8QQwmwE4Sg.png");
					background-repeat: no-repeat;
					background-size: contain;
					font-size: 25rpx;
					color: #ffffff;
				}
			}
		}
		.tit {
			font-size: 28rpx;
		}
		.price {
			color: #ff5e52;
			font-size: 25rpx;
			text {
				font-size: 28rpx;
			}
		}
		.b-bot {
			width: 96%;
			margin: 20rpx auto;
			.scroll-container {
				white-space: nowrap;
				.scroll-item {
					margin-right: 10rpx;
					display: inline-block;
					width: 280rpx;
					height: 350rpx;
					position: relative;
					.item-bot {
						width: 96%;
						left: 50%;
						position: absolute;
						transform: translateX(-50%);
						bottom: 4%;
						background-image: url('@/static/img/icon/AD0I6LmFDhAEGAAgm_GGlQYop9rXuwEwvwE4XA.png');
					}
				}
			}
		}
	}
</style>
