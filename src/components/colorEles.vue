<template>
	<div class="colorful" v-bind:style="{height:fullHeight+'px'}">
		<div class="colorInfo">
			<h2>挑战中</h2>
			<p>colorEle{{fullWidth}}-{{fullHeight}}</p>
		</div>
		<div class="colorEleBox" v-bind:style="{height:fullWidth+'px',width:fullWidth+'px'}">
		hahaha
		</div>
	</div>
</template>


<script>
export default {
	name: 'colorful',
	data:function() {
		return {
			fullHeight : document.documentElement.clientHeight,
			fullWidth : document.documentElement.clientWidth>750?750:document.documentElement.clientWidth
		}
	},
	mounted: function(){
		window.addEventListener('resize', this.handleResize)
	},
	beforeDestroy: function () {
		window.removeEventListener('resize', this.handleResize)
	},
	methods:{
		handleResize:function(event){
			this.fullHeight = document.documentElement.clientHeight
			this.fullWidth = document.documentElement.clientWidth>750?750:document.documentElement.clientWidth
		}
	},
	computed:{
		eleSizeInfo:function(){}

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
}
.colorful .colorInfo h2 {
	font-size:1.6em;
}
.colorful .colorInfo p {
	font-size:1.2em;
	line-height: 2em;
}
.colorful .colorEleBox {
	background: #333;
}
</style>