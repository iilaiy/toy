<template>
	<view>
		<!-- 条件编译 H5端显示 -->
		<!-- #ifdef H5 -->
		<u-icon 
			name="arrow-left" 
			color="#000000"
			size="38" 
			@click="back">
		</u-icon>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		name:"NavigateBack",
		data() {
			return {
				
			};
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped>

</style>