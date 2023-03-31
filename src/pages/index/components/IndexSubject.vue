<template>
	<view class="subject" ><!-- @touchstart="touchStart" @touchend="touchEnd" -->
		<view class="subconta">
			<view class="subbox" v-for="item in moduleData" :key="item.cid">
				<view class="imgbox" :style="{backgroundImage: 'url(' + item.image + ')'}">
					<!-- <image :src="item.image"></image> -->
				</view>
				<view class="sbot">
					<view class="stit">
						<text class="text-one-hidden">{{ item.name }}</text>
					</view>
					<view class="sprice">
						￥<text>{{ Number(item.price).toFixed(2) }}</text>
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
				Array
			}
		},
		data() {
			return {
				//初始化点击位置的x坐标
				// startX: 0,
			}
		},
		methods: {
			/*
			* 触摸开始
			* @param {Object} e
			**/
			/* touchStart(e) {
				// console.log(e);
				if (e.touches.length == 1) {
					//设置触摸起始点水平方向位置
					this.startX = e.touches[0].clientX;
				}
			}, */
			/*
			* 触摸结束
			* @param {Object} e
			**/
			/* touchEnd(e) {
				// console.log(e);
				if (e.changedTouches.length == 1) {
					//手指移动结束后水平位置
					var endX = e.changedTouches[0].clientX;
					let diff = endX - this.startX;
					if(Math.abs(diff)>80){
						// 判断左滑右滑跳转对应的tab并向父组件传递当前的分类ID
						if(diff>0){
							// console.log("左滑...")
							this.$emit('tabtap', -1)
						}else{
							// console.log("右滑...")
							this.$emit('tabtap', 1)
						}
					}
				}
			} */
		},
	}
</script>

<style lang="scss" scoped>
	.subject {
		background-color: #fbfbfb;
		padding-bottom: 4%;
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
				border-radius: 15rpx;
				.imgbox {
					border-radius: 15rpx;
					overflow: hidden;
					height: 300rpx;
					background-size: cover;
					background-position: center top;
					/* image {
						max-width: 100%;
						max-height: 100%;
						display: block;
						margin: auto;
					} */
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
					text {
						width: 100%;
						display: block;
					}
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