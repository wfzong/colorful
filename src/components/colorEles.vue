<template>
	<div class="colorful" v-bind:style="{'min-height':fullHeight+'px'}">
		<div class="colorInfo">
			<h2>挑战中</h2>
			<p>剩余时间：{{totalTime}}s</p>
			<p>当前等级：{{level}}</p>
		</div>
		<div class="colorEleBox"   v-bind:style="{height:fullWidth+'px',width:fullWidth+'px'}">
			<color-box v-on:youGotMe="doTheNext" :items="eles" :eleWidth="fullWidth" :initEle="initEle"></color-box>
		</div>

		<init-count-down v-if="showCount" @down="start" :initCount="3">
			<h3 slot="header">请找出不同颜色的色块！</h3>
			<span slot="body">游戏倒计时：</span>
		</init-count-down>

		<show-result v-if="result" :level="level" @playAgain="restart"></show-result>
	</div>

</template>


<script>
import colorBox from './colorBox.vue'
import initCountDown from './countDown.vue'
import showResult from './showResult.vue'



/*
	根据给定颜色:color、权重:index
	返回相近色
*/
function getSimilarColor(color,index){
	var R = getAddedStr(color.substr(0,2),index);
	var G = getAddedStr(color.substr(2,2),index);
	var B = getAddedStr(color.substr(4,2),index);
	return R+G+B;
}
/*
	将字符串转换成整数，处理、判断后返回字符串
*/
function getAddedStr(str,num){
	num = parseInt(num*1);//乘以系数，增加难度
	num = num > 0 ? num : 1;

	var x = parseInt(str,16)+num;
	x = x > 255 ? 255 : x;
	x = x < 16 ? 16 : x;
	return x.toString(16);
}


/*	generateBox 生成game box

	count:初始化box的个数
	color:默认色值
	level:当前游戏等级
	complexRate:最高难度
*/

function generateBox(count,color,level,complexRate){
	console.log(level)
	var getactiveColorIndex =  Math.floor(Math.random()*color.length)
	var activeColor = color.slice(getactiveColorIndex,getactiveColorIndex+1)
	activeColor = activeColor.toString()

	console.log(activeColor)

	var boxInfo = Array.apply(null,{length:count}).map(function(){
		return {
			color:activeColor,
			isMe:false
		}
	})

	var special = {
		color:getSimilarColor(activeColor,(complexRate-level)),
		isMe:true
	}

	var specialIndex = Math.floor(Math.random()*count)
	boxInfo.splice(specialIndex,1,special)
	return boxInfo;
}


export default {
	name: 'colorful',
	data:function() {
		return {
			fullHeight : document.documentElement.clientHeight,
			fullWidth : document.documentElement.clientWidth>750?750:document.documentElement.clientWidth,
			storeStatus:{
				level:0,
				complexRate:50,
				totalTime:20,
				initEle:2,
				maxEle:6
			},
			level:0,//初始化等级
			complexRate:0,//最高难度
			totalTime:0,//单轮游戏时长
			initEle:0,//初始化色块个数 2x2 -> 4
			maxEle:0,//最多色块个数 6x6 -> 36
			countDown:'',//倒计时句柄
			colorLibrary:['663399','ff6600','cc3333','009999','99cc00'],//色库，每次生成时从中任取一值
			eles:[],
			running:false,//游戏默认未开始
			showCount:false,//倒计时，默认关闭，mount后开始
			result:false//默认不显示结果（也没有结果）
		}
	},
	computed:{

	},
	components:{
		colorBox, //注册组件
		initCountDown,
		showResult
	},
	methods:{
		handleResize:function(event){
			this.fullHeight = document.documentElement.clientHeight
			this.fullWidth = document.documentElement.clientWidth>750?750:document.documentElement.clientWidth
		},
		doTheNext:function(){
			
			if (!this.running) {return}//默认游戏未开始，倒计时提示开始！

			this.level++
			if (this.initEle < this.maxEle){
				this.initEle++
			}

			this.eles = generateBox(this.initEle*this.initEle , this.colorLibrary , this.level+1 , this.complexRate)	

		},
		restart:function(){
			this.level = this.storeStatus.level
			this.complexRate = this.storeStatus.complexRate
			this.totalTime = this.storeStatus.totalTime 
			this.initEle = this.storeStatus.initEle 
			this.maxEle = this.storeStatus.maxEle 
			
			this.result = false //关闭结果显示

			this.eles = generateBox(this.initEle*this.initEle , this.colorLibrary , this.level+1 , this.complexRate)//初始化，生成box

			this.start()
		},
		start:function(){//开始游戏
			var self = this

			this.showCount = false //关闭倒计时窗口
			this.running = true	//打开游戏

			this.countDown = setInterval(function(){
				self.totalTime--

				console.log(self.totalTime)

				if (self.totalTime == 0) {
					clearInterval(self.countDown)
					self.running = false

					//游戏结束，统计分数
					self.result = true

				}
			},1000)

		},
		gotMeIn:function(msg){
			alert("you GOT me!"+msg)
		}
	},
	mounted: function(){

		this.level = this.storeStatus.level
		this.complexRate = this.storeStatus.complexRate
		this.totalTime = this.storeStatus.totalTime 
		this.initEle = this.storeStatus.initEle 
		this.maxEle = this.storeStatus.maxEle 

		var self = this
		this.showCount = true

		this.eles = generateBox(this.initEle*this.initEle , this.colorLibrary , this.level+1 , this.complexRate)//初始化，生成box

		window.addEventListener('resize', this.handleResize)
	},
	beforeDestroy: function () {
		window.removeEventListener('resize', this.handleResize)
	},
	directives: {
		ok: {
			inserted:function(el){
				console.log("YES! you inserted me!")
				console.log(el)
			}
		}
	}
}
</script>

<style>
.colorful {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.colorful .colorInfo {
	text-align: center;
	margin: 0 0 3em 0;
	color: #ffcc00;
}
.colorful .colorInfo h2 {
	font-size:1.6em;
	line-height: 2em;
	font-weight: bold;
}
.colorful .colorInfo p {
	font-size:1.2em;
}
.colorful .colorEleBox {
}
</style>