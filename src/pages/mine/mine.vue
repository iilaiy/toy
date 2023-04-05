<template>
	<view class="mine">
		<!-- 头部 -->
		<MineHeader></MineHeader>
		<view class="firstOrder menu">
			<view class="firstTitle">
				<text>我的订单</text>
				<i class="iconfont icon-youjiantou"></i>
			</view>
			<MineMenu :menuList="firstMenuList"></MineMenu>
		</view>
		<view class="second menu">
			<MineMenu 
				:rowNum="4" 
				:menuList="secondMenuList"
				iconSize="48rpx"
				fontSize="27rpx"
				:customStyle="itemStyle"
			></MineMenu>
		</view>
	</view>
</template>

<script>
	import MineHeader from './components/MineHeader'
	import MineMenu from './components/MineMenu'
	export default {
		components: {
			MineHeader,
			MineMenu
		},
		data() {
			return {
				itemStyle: {margin: '20rpx 0'},
				firstMenuList: [
					{
						id: 1,
						name: '待付款',
						icon: '&#xe603;'
					},
					{
						id: 2,
						name: '待发货',
						icon: '&#xe600;'
					},
					{
						id: 3,
						name: '已发货',
						icon: '&#xe620;'
					},
					{
						id: 4,
						name: '交易完成',
						icon: '&#xe779;'
					},
					{
						id: 5,
						name: '交易关闭',
						icon: '&#xe62c;'
					},
				],
				secondMenuList: [
					{
						id: 1,
						name: '我的表单',
						icon: '&#xe715;'
					},
					{
						id: 2,
						name: '我的会员卡',
						icon: '&#xe643;'
					},
					{
						id: 3,
						name: '我的积分',
						icon: '&#xe601;'
					},
					{
						id: 4,
						name: '我的优惠卷',
						icon: '&#xe621;'
					},
					{
						id: 5,
						name: '我的余额',
						icon: '&#xe606;'
					},
					{
						id: 6,
						name: '我的砍价',
						icon: '&#xe6d1;'
					},
					{
						id: 7,
						name: '我的拼团',
						icon: '&#xe60d;'
					},
					{
						id: 8,
						name: '推广员中心',
						icon: '&#xe61f;'
					},
					{
						id: 9,
						name: '分销中心',
						icon: '&#xe61b;'
					},
					{
						id: 10,
						name: '收货人地址',
						icon: '&#xe63f;'
					},
					{
						id: 11,
						name: '申请开店',
						icon: '&#xe604;'
					},
					{
						id: 12,
						name: '团长中心',
						icon: '&#xe639;'
					},
					{
						id: 13,
						name: '退出登录',
						icon: '&#xe62f;'
					},
					{
						id: 14,
						name: '我的礼品卡',
						icon: '&#xe60a;'
					},
					{
						id: 15,
						name: '我的收藏',
						icon: '&#xe686;'
					},
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.mine {
	min-height: 100vh;
	background-color: #f4f4f4;
	.menu{
		width: 92%;
		margin: 20rpx auto;
		border-radius: 25rpx;
		background-color: #ffffff;
	}
	.firstOrder {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-bottom: 15rpx;
		.firstTitle {
			width: 90%;
			margin: 0 auto;
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f4f4f4;
			font-size: 28rpx;
		}
		
	}
	.second {
		padding: 10rpx 0;
	}
}
</style>
