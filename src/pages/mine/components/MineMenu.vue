<template>
	<view>
		<u-grid 
			:border="false" 
			:col="rowNum"
		>
			<u-grid-item
				v-for="menuItem in menuList"
				:key="menuList.id"
				:customStyle="customStyle"
			>
				<i 
					class="iconfont" 
					v-html="menuItem.icon"
					:style="{color: iconColor, fontSize: iconSize}"
				></i>
				<text :style="{color: fontColor, fontSize: fontSize}">{{ menuItem.name }}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		props: {
			/* 一行显示多少个 */
			rowNum: {
				type: Number,
				default: 5
			},
			/* 菜单数据 */
			menuList: {
				type: Array
			},
			/* 每项样式 */
			customStyle: {
				type: Object,
				default: () => {
					return {
						margin: '20rpx 0'
					}
				}
			},
			/* 图标颜色 */
			iconColor: {
				type: String,
				default: '#565656'
			},
			/* 图标大小 */
			iconSize: {
				type: String,
				default: '45rpx'
			},
			/* 字体大小 */
			fontSize: {
				type: String,
				default: '25rpx'
			},
			/* 字体颜色 */
			fontColor: {
				type: String,
				default: '#565656',
			}
		},
		data() {
			return {
				
			}
		},
		created() {
			
		}
	}
</script>

<style scoped>
	.u-grid {
	}
	.u-grid-item {
	}
	text {
		margin-top: 10rpx;
	}
</style>