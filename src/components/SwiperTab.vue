<template>
	<view class="swiper-tab-bar">
		<scroll-view class="tab-bar" scroll-x="true" :scroll-left="scrollLeft">
			<view class="tab-item" v-for="(tab,index) in category" :key="index" :class="{'active' : tabIndex == index}"
				@tap="tabtap(index)"
				>
				{{tab.name}} {{tab.num?tab.num:""}}
				<view class="swiper-tab-line"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
		},
		data() {
			return {
				contentScrollW: 0, // 导航区宽度
				curIndex: 0, // 当前选中
				scrollLeft: 0, // 横向滚动条位置
				category: this.tabBars
			}
		},
		mounted() {
			// 获取标题区域宽度，和每个子元素节点的宽度
			this.getScrollW()
		},
		computed: {
		},
		methods: {
			//点击切换导航
			tabtap(index) {
				this.$emit('tabtap', index)
				this.changeTitle(index)
			},
			// 获取标题区域宽度，和每个子元素节点的宽度以及元素距离左边栏的距离
			getScrollW() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.swiper-tab-bar').boundingClientRect(data => {
					// 拿到 scroll-view 组件宽度
					this.contentScrollW = data.width
				}).exec();
				query.selectAll('.tab-item').boundingClientRect(data => {
					let dataLen = data.length;
					for (let i = 0; i < dataLen; i++) {
						//  scroll-view 子元素组件距离左边栏的距离
						this.category[i].left = data[i].left;
						//  scroll-view 子元素组件宽度
						this.category[i].width = data[i].width
					}
				}).exec()
			},
			// 选择标题
			changeTitle(index) {
				this.curIndex = index;
				// 效果一(当前点击子元素靠左展示)  局限性：子元素宽度相同
				// this.scrollLeft = index * this.category[index].width
				// 效果一(当前点击子元素靠左展示)  子元素宽度不相同也可实现
				/* this.scrollLeft = 0;
				for (let i = 0; i < index; i++) {
					this.scrollLeft += this.category[i].width
				}; */
				// 效果二(当前点击子元素靠左留一展示)  局限性：子元素宽度相同
				/* this.scrollLeft = (index - 1)  * this.category[index].width */
				// 效果二(当前点击子元素靠左留一展示)  子元素宽度不相同也可实现
				/* this.scrollLeft = 0;
				for (let i = 0; i < index - 1; i++) {
					this.scrollLeft += this.category[i].width
				}; */
				// 效果三(当前点击子元素居中展示)  不受子元素宽度影响
				this.scrollLeft = this.category[index].left - this.contentScrollW / 2 + this.category[index].width / 2;
			}
		},
		watch: {
			tabIndex(val) {
				this.changeTitle(val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-bar {
		white-space: nowrap;

		.tab-item {
			width: 150rpx;
			display: inline-block;
			text-align: center;
			color: #999999;
			font-size: 25rpx;
		}
		.active {
			color: #353535;

			.swiper-tab-line {
				border-bottom: 4rpx solid #f7883e;
				width: 50%;
				margin: auto;
				margin-top: 12rpx;
			}
		}
	}
</style>