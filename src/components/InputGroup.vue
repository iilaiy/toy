<template>
	<view class="input-group">
		<icon type="search" size="16" color="#666666"/>
		<input 
			disabled
			class="uni-input" 
			confirm-type="search" 
			placeholder="请输入关键词搜索..."
		/>
	</view>
</template>

<script>
	export default {
		name:"InputGroup",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.input-group {
	display: flex;
	align-items: center;
	height: 70rpx;
	background-color: #f4f4f4;
	border-radius: 50rpx;
	padding: 0 15rpx;
	icon {
		margin: 0 15rpx;
	}
	input {
		font-size: 28rpx;
	}
}
</style>