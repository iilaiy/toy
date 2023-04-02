<template>
	<view class="shop">
		<view class="title">
			门店信息
		</view>
		<view class="conta">
			<view class="storeconent">
				<view class="imgbox" style="background-image: url('https://29449448.s21i.faimallusr.com/4/ABUIABAEGAAg-_uGlQYo_LTDGzCMAji9AQ!160x160.png');">
				</view>
				<view class="infobot">
					<view class="shopname">潮流玩具中心(海珠店)</view>
          <view>

          </view>
					<view class="distance">66.5km</view>
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
		}
	}
</script>

<style lang="scss" scoped>
	.shop {
		.title {
			font-weight: bold;
			font-size: 30rpx;
			margin: 20rpx 0 0;
		}
		.conta {
			margin-bottom: 25rpx;
			.storeconent {
				display: flex;
				margin-top: 25rpx;
				.imgbox {
          border-radius: 25rpx;
					width: 38%;
					height: 200rpx;
					background-size: cover;
					background-position: center top;
				}
				.infobot {
          margin-left: 25rpx;
					flex: 1;
					.shopname {
						font-size: 28rpx;
            font-weight: bold;
					}
					.distance {
						font-size: 25rpx;
					}
				}
			}
		}
	}
</style>