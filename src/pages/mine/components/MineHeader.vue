<template>
	<view  class="mineheader">
		<!-- 用户 -->
		<view class="user">
			<view class="h-img">
				<image src="../../../static/img/mine/tx1.png" mode=""></image>
			</view>
			<view class="moreinfo">
				<view class="name">
					<text>XCX</text>
					<u-icon name="arrow-right" bold size="14px" color="#ffc0a5" class="arrow-right"></u-icon>
				</view>
				<view class="vip">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.mineheader {
		width: 100%;
		height: 260rpx;
		position: relative;
		background:repeating-linear-gradient(to bottom right,#ff6119,rgba(255,94,21,0.6));
		.user {
			float: left;
			display: flex;
			width: 45%;
			height: 200rpx;
			justify-content: center;
			align-items: center;
			.h-img {
				width: 110rpx;
				height: 110rpx;
				border-radius: 50%;
				overflow: hidden;
				border: 2px solid #fea67e;
			}
			.moreinfo {
				margin-left: 20rpx;
			}
			.name {
				font-size: 28rpx;color: #ffffff;
				display: flex;
				align-items: center;
				.arrow-right {
					margin-left: 10rpx;
				}
				.vip {
					height: 25rpx;
					background-color: beige;
				}
			}
		}
	}
	.mineheader::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-image: url('@/static/img/mine/member_center_head_bg.6c7cc821.png');
	}
</style>