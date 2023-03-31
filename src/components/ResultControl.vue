<template>
	<view class="resultcontrol" v-if="price">
		<view class="imgbox" :style="{ backgroundImage: 'url(' + imgPath + ')' }"></view>
		<view class="infobox">
			<view class="title">{{ name }}</view>
			<view class="bot">
				<view class="price">￥<text>{{ price.toFixed(2) }}</text></view>
				<view class="addShoppingCart">
					<image src="@/static/img/icon/shopcart.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			imgPath: {
				type: String,
				default: ''
			},
			name: {
				type: String,
				default: ''
			},
			price: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.resultcontrol {
		background-color: #ffffff;
		display: flex;
		justify-content: space-between;
		padding: 15rpx;
		border-radius: 5rpx;
		.imgbox {
			border-radius: 20rpx;
			width: 250rpx;
			height: 260rpx;
			background-size: cover;
			background-position: center;
		}
		.infobox {
			flex: 1;
			margin-left: 25rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title {
				font-size: 30rpx;
			}
			.bot {
				color: #ff5e15;
				margin-bottom: 10rpx;
				display: flex;
				justify-content: space-between;
				.addShoppingCart {
					image {
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}
	}
</style>