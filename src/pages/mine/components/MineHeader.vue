<template>
  <view class="mineheader">
    <!-- 用户 -->
    <view class="user">
      <view
        class="h-img"
        :style="{'background-image': 'url(' + user_img + ')'}"
      ></view>
      <view class="moreinfo">
        <view class="name">
          <text>XCX</text>
          <u-icon
            name="arrow-right"
            bold
            size="12px"
            color="#ffc0a5"
            class="arrow-right"
          ></u-icon>
        </view>
        <view class="vip">
			<i class="iconfont icon-vip1"></i>
			<text>普通会员</text>
		</view>
      </view>
    </view>
	<!-- 开通会员 -->
	<view class="member">
		<view class="member-title">
			经典黑卡
		</view>
		<view class="member-btn">
			立即开通
		</view>
	</view>
  </view>
</template>

<script>
export default {
	data() {
		return {
			/* 头像 */
			user_img: '/static/img/mine/tx1.png'
		}
	}
}
</script>

<style lang="scss" scoped>
.mineheader {
  width: 100%;
  height: 260rpx;
  position: relative;
  background: repeating-linear-gradient(
    to bottom right,
    #ff6119,
    rgba(255, 94, 21, 0.6)
  );
  .user {
    float: left;
    display: flex;
    width: 45%;
    height: 200rpx;
    justify-content: center;
    align-items: center;
    .h-img {
      width: 110rpx;
      height: 110rpx;
      border-radius: 50%;
      border: 2px solid #fea67e;
      background-size: cover;
      background-position: center top;
    }
    .moreinfo {
      margin-left: 20rpx;
    }
    .name {
      font-size: 26rpx;
      color: #ffffff;
      display: flex;
      align-items: center;
      .arrow-right {
        margin-left: 10rpx;
      }
    }
	.vip {
		margin-top: 10rpx;
		background-color: #f6dcc7;
		color: #bc937f;
		display: flex;
		align-items: center;
		border-radius: 25rpx;
		i {
		  font-size: 38rpx;
		  background-color: #ffffff;
		  border-radius: 50%;
	  }
	  text{
		  font-size: 20rpx;
		  margin-left: 8rpx;
		  padding-right: 10rpx;
	  }
	}
  }
  /* 开通会员 */
  .member {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
  	background-image: url('@/static/img/mine/memberCenterCardBg1_black.eb4bf788.png');
	background-size: cover;
	background-position: center top;
	height: 70rpx;
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 8%;
	box-sizing: border-box;
	.member-title {
		color: #d8bd8b;
		font-size: 26rpx;
	}
	.member-btn {
		color: #8d6d42;
		background-color: #f3e5cc;
		border-radius: 25rpx;
		padding: 5rpx 25rpx;
		font-size: 25rpx;
	}
  }
}
.mineheader::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-image: url('@/static/img/mine/member_center_head_bg.6c7cc821.png');
}

</style>
