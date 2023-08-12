<template>
	<view>
		<bar-title bgColor='bg-white' @rightTap="barEditTap">
			<block slot="content">比赛分析</block>
			
		</bar-title>
		<web-view :src="getSrc()" style="margin-top: 10rpx;"></web-view>
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	export default{
		name:"fenxi",
		components:{
			barTitle
		},
		data(){
			return {
				id:""
			}
		},
		onLoad(option) {
			this.id = option.game_id
			
		},
		methods:{
			getSrc(){
			 return "https://m.sporttery.cn/wap/fb/fb_match_info.php?m="+this.id+"&f=livescore"
			
			}
		}
	}
</script>

<style>
</style>
