<template>
	<view class="selectcontrol">
		<view :class="[ 'select-item', tabIndex == item.id ? 'select-item-active' : '']" v-for="(item,index) in navList" :key="index" @tap="switchIndex(item)">
			<text>{{ item.name }}</text>
			<view class="item-icon">
				<image :src="sortPrice == -1 ? item.selectIcon : item.icon"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 1,
				sortPrice: 1,
				flag: false,
				navList: [
					{
						id: 1,
						name: '综合',
						icon: '',
						selectIcon: ''
					},
					{
						id: 2,
						name: '销量',
						icon: '',
						selectIcon: ''
					},
					{
						id: 3,
						name: '价格',
						icon: '/static/img/icon/jiagepaixv1.png',
						selectIcon: '/static/img/icon/jiagepaixv2.png'
					}
				]
			}
		},
		methods: {
			switchIndex(item) {
				this.tabIndex = item.id
				// console.log(index)
				if (this.tabIndex == 3) {
					if (this.flag) {
						this.sortPrice = -1
						this.flag = false
					} else {
						this.sortPrice = 1
						this.flag = true
					}
				} else {
					this.sortPrice = 1
					this.flag = false
				}
				/* 向父组件传递当前筛选的条件 */
				if (this.tabIndex == 3) return this.$emit('selectCondition', {item, sortPrice: this.sortPrice})
				this.$emit('selectCondition', {item})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.selectcontrol {
		display: flex;
		justify-content: space-between;
		.select-item {
			width: calc(100% / 3);
			height: 50rpx;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			text {
				font-size: 28rpx;
			}
			.item-icon {
				width: 28rpx;
				height: 30rpx;
			}
		}
		.select-item-active {
			text {
				color: #ff5e15;
			}
		}
	}
</style>