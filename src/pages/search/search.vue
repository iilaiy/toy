<template>
	<view class="searchviews">
		<view class="header">
			<NavigateBack class="back"></NavigateBack>
			<view class="search-group ">
				<u-search
					placeholder="请输入关键字..." 
					v-model="keyword"
					:animation="true"
					height="60rpx"
					searchIconSize="35rpx"
					:focus="true"
					maxlength="50"
					@search="searchResult(keyword)"
					@custom="searchResult(keyword)"
				></u-search>
			</view>
		</view>
		<!-- 筛选控件 -->
		<SelectControl @selectCondition="selectCondition"></SelectControl>
		<!-- 搜索结果 -->
		<SearchResult :resultArray="resultArray"></SearchResult>
		<!-- 搜索结果为空时显示该组件 -->
		<SearchResultNaN v-if="resultArray.length == 0"></SearchResultNaN>
	</view>
</template>

<script>
	let jsonData = require('@/data/commodity.js')
	import NavigateBack from '@/components/NavigateBack'
	import SelectControl from './components/SelectControl'
	import SearchResult from './components/SearchResult'
	import SearchResultNaN from './components/SearchResultNaN'
	export default {
		components: {
			NavigateBack,
			SelectControl,
			SearchResult,
			SearchResultNaN
		},
		data() {
			return {
				keyword: '',
				commodityList: jsonData.commodityList.commodityData,	// 所有商品
				resultArray: []	  // 搜索结果
			}
		},
		methods: {
			searchResult(result) {
				// console.log(result);
				this.resultArray = []
				/* 查询搜索结果 (name、categoryName) */
				this.commodityList.map(item => {
					if( (item.name).indexOf(result) !== -1 || (item.categoryName).indexOf(result) !== -1) {
						this.resultArray.push(item)
					}
				})
			},
			selectCondition(obj) {
				// console.log(obj)
				switch (obj.item.id) {
						/* if 综合 默认不变 */
					case 1:
						this.searchResult(this.keyword)
						break
						/* 销量 */
					case 2:
						this.resultArray.sort((val, val2) => {
							return val2.salesVolume - val.salesVolume
						})
						console.log(this.resultArray)
						break
						/* 价格 */
					case 3:
						this.resultArray.sort((val, val2) => {
							/* 先判断升序or降序 */
							if (obj.sortPrice === 1) {
								return val.price - val2.price
							}
							return val2.price - val.price
						})
						// console.log(this.resultArray)
						break
				}
			}
		},
		created() {
			this.searchResult(this.keyword)
		}
	}
</script>

<style lang="scss" scoped>
.header {
	width: 90%;
	margin: 0 auto;
	height: 120rpx;
	display: flex;
	align-items: center;
	/* #ifdef H5 */
	.back {
		width: 8%;
	}
	/* #endif */
	.search-group {
		flex: 1;
		margin: 0 auto;
	}
}
</style>
