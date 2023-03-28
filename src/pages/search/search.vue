<template>
	<view>
		<NavigateBack></NavigateBack>
		<u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
	</view>
</template>

<script>
	import NavigateBack from '@/components/NavigateBack'
	export default {
		components: {
			NavigateBack
		},
		data() {
			return {
				keyword: '遥看瀑布挂前川'
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
