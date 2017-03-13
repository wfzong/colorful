<template>
	<div class="box">
		<span 
		v-for="(item,key) in items" 
		:style="{'background':'#'+item.color,width:(eleWidth/initEle)+'px',height:(eleWidth/initEle)+'px'}" 
		:data-isme="item.isMe"
		v-on:click="checkMe"
		>



		</span>
	</div>
</template>

<script>
export default {
	props : {
		items:Array,
		eleWidth:Number,
		initEle:Number

	},
	methods:{
		checkMe:function(e){
			if(e.target.dataset.isme == 'true') {
				this.$emit('youGotMe')
			}
		}
	}
}
</script>

<style>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
}
.box span {
	border-radius: 13px;
	border:solid #990066;
}
</style>