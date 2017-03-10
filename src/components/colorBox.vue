<template>
	<div class="box">
		<span 
		v-for="(item,key) in items" 
		:style="{'background':'#'+item.color}" 
		:data-isme="item.isMe"
		v-on:click="checkMe"
		>



		</span>
	</div>
</template>

<script>
export default {
	props : {
		items:Array
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
.box span {
	display: inline-block;
	width: 60px;
	height: 60px;
}
</style>