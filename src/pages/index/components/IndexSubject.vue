<template>
	<view class="subject">
		<view class="subconta">
			<view class="subbox" v-for="index in 3">
				<view class="imgbox">
					<image src="@/static/img/AD0I6LmFDhACGAAg6vOGlQYozuv34QUw7gU47gU.jpg"></image>
				</view>
				<view class="sbot">
					<view class="stit">
						<text class="text-two-dot">蜡笔小新日常系列盲盒</text>
					</view>
					<view class="sprice">
						￥<text>69.5</text>
					</view>
					<view class="sbtn">
						<text>立即抢购</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			/* 接收不同模块传递的数据进行渲染 */
			moduleData: {
				
			}
		},
		data() {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>
	.subject {
		background-color: #fbfbfb;
		.subconta {
			width: 92%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.subbox {
				box-shadow: 5rpx 5rpx 15rpx #f1f1f1;
				width: 48%;
				margin-top: 4%;
				background-color: aliceblue;
				border-radius: 25rpx;
				.imgbox {
					border-radius: 15rpx;
					overflow: hidden;
					height: 300rpx;
				}
			}
			.sbot {
				padding: 15rpx 20rpx 20rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.stit {
					width: 100%;
					margin-bottom: 20rpx;
					font-size: 28rpx;
				}
				.sprice {
					color: #ff7214;
					font-size: 20rpx;
					text {
						font-size: 35rpx;
					}
				}
				.sbtn {
					color: #ff7214;
					border: 1px solid #ff7214;
					padding: 8rpx 20rpx;
					border-radius: 35rpx;
					font-size: 25rpx;
				}
			}
		}
	}
</style>