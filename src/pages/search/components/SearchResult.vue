<template>
	<view class="resultview">
		<ResultControl
			class="rescont"
			v-for="item in resultArray"
			:imgPath="item.image"
			:name="item.name"
			:price="Number(item.price)"
		></ResultControl>
	</view>
</template>

<script>
	import ResultControl from '@/components/ResultControl'
	export default {
		props: ["resultArray"],
		components: {
			ResultControl,
		},
		data() {
			return {
			}
		}
	}
</script>

<style lang="scss" scoped>
	.resultview {
		width: 100%;
		background-color: #f3f3f3;
		display: flex;
		flex-wrap: wrap;
	}
	.rescont {
		width: 92%;
		margin: 0 auto;
		margin-top: 2%;
	}
</style>