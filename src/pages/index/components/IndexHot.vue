<template>
	<view class="hot">
		<view class="title">
			<text>热门款式</text>
		</view>
		<view class="conta">
			<view class="box">
				<view class="img-box">
					<image src="../../../static/img/AD0I6LmFDhAEGAAgs_SGlQYo-ZWz-AUwyAU41QI.png"></image>
				</view>
				<view class="t-bot clearfix">
					<view class="t-left">
						<view class="tit text-one-hidden">宇宙波比-梦旅人系列</view>
						<view class="price">
							￥<text>296.00</text>
						</view>
					</view>
					<button class="t-button" type="default" plain="true">
						立即购买
					</button>
				</view>
			</view>
			<view class="box">
				<view class="img-box">
					<image src="../../../static/img/AD0I6LmFDhAEGAAgvueGlQYoh-zY5gIwyAU41AI.png"></image>
				</view>
				<view class="t-bot clearfix">
					<view class="t-left">
						<view class="tit text-one-hidden">芭比兔女孩系列盲盒</view>
						<view class="price">
							￥<text>69.00</text>
						</view>
					</view>
					<button class="t-button" type="default" plain="true">
						立即购买
					</button>
				</view>
			</view>
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
	.hot {
		.title {
			height: 120rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			text {
				width: 220rpx;
				text-align: center;
				font-weight: 600;
				position: relative;
			}
			text::before, text::after {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				content: "";
				width: 25rpx;
				height: 7rpx;
				background-color: #b8b8b8;
			}
			text::before {
				left: 0;
			}
			text::after {
				right: 0;
			}
		}
		.conta {
			padding-bottom: 25rpx;
			.box {
				margin-bottom: 30rpx;
				box-shadow: 5rpx 5rpx 20rpx #ebeaea;
				border-radius: 20rpx;
				.img-box {
					width: 100%;
					height: 360rpx;
				}
				.t-bot {
					background-color: #ffffff;
					border-radius: 15rpx;
					box-sizing: border-box;
					padding: 15rpx 20rpx 15rpx 50rpx;
					.t-left {
						float: left;
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
		}
	}
</style>