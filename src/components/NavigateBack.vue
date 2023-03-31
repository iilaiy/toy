<template>
	<view>
		<!-- 条件编译 H5端显示 -->
		<!-- #ifdef H5 -->
		<u-icon 
			name="arrow-left" 
			color="#000000"
			size="40" 
			@click="back">
		</u-icon>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		name:"NavigateBack",
		props: {
			routerPath: {
				type: String,
				default: '/pages/index/index'
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			back() {
				// console.log(this.routerPath)
				uni.reLaunch({
					url: this.routerPath
				})
			}
		}
	}
</script>

<style scoped>

</style>