<template>
	<div class="welcome" v-bind:style="{height:fullHeight+'px'}">
		<div class="info">
			<h2>看看你有多好色！</h2>

			<p><router-link to="/running">去完</router-link></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'welcome',
	data:function() {
		return {
			fullHeight : document.documentElement.clientHeight
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
			this.fullHeight = document.documentElement.clientHeight;
		}
	}
}
</script>

<style lang="scss">
.welcome {
	display: flex;
	justify-content: center;
	align-items: center;
}
.welcome .info {
	text-align:center;
}
.welcome .info h2 {
	font-weight:bold;
	font-size:2em;
}
.welcome .info p {
	font-size:1.2em;
}
</style>