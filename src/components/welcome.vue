<template>
	<div class="welcome" v-bind:style="{height:fullHeight+'px'}">
		<div class="info">
			<h2>看看你有多好色~</h2>

			<p><router-link to="/running">去玩 >></router-link></p>
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
	color:#ffcc00;
}
.welcome .info a {
	color:#ffcc00;
	text-decoration:none;
}
.welcome .info h2 {
	font-weight:bold;
	font-size:2em;
}
.welcome .info p {
	line-height:4em;
	font-size:1.4em;
}
.welcome .info p a {
	animation:go 1.5s 30000 reverse;
	border-radius:0.5em;
	padding:0.3em;
}


@keyframes go {
	0% {background:#ffcc00}
	50% {background:#990066}
	100% {background:#ffcc00}
}
@keyframes myfirst
{
	from {background:red;}
	to {background:yellow;}
}

</style>