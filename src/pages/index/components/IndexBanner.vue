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
				>
				<swiper-item v-for="(item, index) in bannerList" :key="index">
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
	$swiper-height: 360rpx;
	.indexbanner {
		.index-swiper {
			height: $swiper-height;
		}
		.index-swiper-item {
			image {
				height: $swiper-height;
			}
		}
	}

</style>

<style lang="scss">
	/* h5 APP */
	uni-swiper {
		.uni-swiper-dots {
			
		}
		 
		.uni-swiper-dots-horizontal {
			

		}
	}
	 
	/* 微信小程序 */
	wx-swiper {
		.wx-swiper-dots {
			
		}
		 
		.wx-swiper-dots-horizontal {
			
		}
	}
</style>