<template>
	<view>
		<bar-title bgColor="bg-white" :isBack="true" @rightTap="barTitleRightTap">
			<block slot="content">提现记录</block>
		</bar-title>
		
		<view class="example-body" style="display: flex;align-items: center;">
			<picker @change="bindPickerChange" :value="index" style="flex:1;margin: 0 20rpx;" :range="array">
				<view class="uni-input">{{array[index]}}</view>
			</picker>
				<text style="color: red;flex: 1;">￥{{all}}</text>
		</view>
		<z-paging class="pages" ref="paging" v-model="dataList" @query="queryList">
		    <view class="item" v-for="(item,index) in dataList">
		        <view class="item-title" style="padding: 30rpx 20rpx;background-color: white;margin-bottom: 20rpx;">
					<view style="display: flex;flex-direction: column;line-height: 60rpx;">
						<view style="display: flex;align-items: center;justify-content: space-between;border-bottom: 1px solid #EEEEEE;">
							<view style="font-weight: bold;">{{item.add_time}}</view>
							<view>{{item.en_type}}</view>
						</view>
						
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<view style="font-weight: bold;">提现人</view>
							<view>{{item.real_name}}</view>
						</view>
						<view v-if="item.extract_type == 'alipay'" style="display: flex;align-items: center;justify-content: space-between;">
							<view style="font-weight: bold;">支付宝账号</view>
							<view>{{item.alipay_code}}</view>
						</view>
						<view v-if="item.extract_type == 'bank'" style="display: flex;align-items: center;justify-content: space-between;">
							<view style="font-weight: bold;">银行账号</view>
							<view>{{item.bank_code}}</view>
						</view>
						<view v-if="item.extract_type == 'wx'" style="display: flex;align-items: center;justify-content: space-between;">
							<view style="font-weight: bold;">微信账号</view>
							<view>{{item.wechat}}</view>
						</view>
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<view style="font-weight: bold;">手机号</view>
							<view>{{item.user.phone}}</view>
						</view>
						
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<view style="font-weight: bold;">提现金额</view>
							<view>{{item.extract_price}}</view>
						</view>
						
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<view style="font-weight: bold;">状态</view>
							<view>{{item.en_status}}</view>
						</view>
						
						<view style="display: flex;align-items: center;justify-content: space-between;">
							<view style="font-weight: bold;">备注</view>
							<view>{{item.mark}}</view>
						</view>
					
					</view>
					
					
				</view>
		    </view>
		</z-paging>
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	export default{
		name:"withdrawList",
		components: {
			barTitle
		},
		data(){
			return {
				array: [],
				index: 0,
				maskClick:false,
			
				dataList:[],
				all:0
			}
		},
		
		methods:{
			bindPickerChange(e){
				this.index = e.target.value
				var data = {"type":this.index}
				this.$api.getWithdrawList(data).then(res=>{
					this.all = res.data.all
					this.$refs.paging.complete(res.data.data);
				})
			},
			change(e){
				this.range = e
				var data = {"type":this.index}
				this.$api.getWithdrawList(data).then(res=>{
					this.all = res.data.all
					this.$refs.paging.complete(res.data.data);
				})
			},
			queryList(pageNo, pageSize){
			
				
		
					var data = {"pageNo":pageNo,"pageSize":pageSize,"type":this.index}
					this.$api.getWithdrawList(data).then(res=>{
					    this.array = res.data.pay_type
						this.all = res.data.all
					  
						this.$refs.paging.complete(res.data.data);
					})
				
				
			}
		}
		
	}
</script>

<style>
	.pages{
		/* #ifndef MP */
		margin-top: calc(var(--status-bar-height) + 181rpx);
		/* #endif */
		
		/* #ifdef MP */
		margin-top: calc(var(--status-bar-height) + 241rpx);
		/* #endif */
	}
	 picker {
	   	font-size: 20rpx;
	   	height: 80rpx;
	   	/* background: #F2F2FC url(../../static/images/icon_sanjiao.png) 93% center no-repeat; */
	   	background-color: #f2f2fc;
	   	background-size: 32rpx 22rpx;
	   	padding: 0 20rpx;
	   	border-radius: 10rpx;
	
	   	line-height: 80rpx;
	   }
	
</style>
