<template>
	<view class="indexbanner">
		<view class="uni-margin-wrap">
			<swiper
				class="swiper index-swiper" 
				circular 
				:indicator-dots="indicatorDots" 
				:autoplay="autoplay" 
				:interval="interval"
				:duration="duration"
				indicator-active-color="rgba(255, 255, 255, 1)"
				>
				<swiper-item v-for="(item, index) in bannerList">
					<view class="swiper-item index-swiper-item">
						<image :src="item.imgPath"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bannerList: {
				type: Array
			}
		},
		data() {
			return {
				indicatorDots: true, // 是否显示面板指示点
				autoplay: true,	// 是否自动切换
				interval: 3000,	// 自动切换时间间隔
				duration: 500, // 滑动动画时长
				
			}
		},
	}
</script>

<style lang="scss" scoped>
	.indexbanner {
		.index-swiper {
			height: 380rpx;
		}
		.index-swiper-item {
			image {
				width: 100%;
				height: 380rpx;
				display: block;
			}
		}
	}
</style>