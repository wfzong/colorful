<template>
<transition name="showResult">
<div class="result-mask">
	<div class="result-wrapper">
		<div class="result-container">


			<div class="count-header">
				<h3>{{re.title}}</h3>
			</div>

			<div class="count-body">
				{{re.description}}<br />
				最终得分：{{level}}
			</div>

			<div class="count-footer">
				<button @click="$emit('playAgain')">再玩一次</button>
				<button @click="wxShare=!wxShare">让别人看看</button>
			</div>


		</div>
	</div>
	<div v-if="wxShare" @click="wxShare=!wxShare" class="share-mask"></div>
</div>

</transition>
</template>
<script>
export default {
	props:{
		level:Number
	},
	data:function(){
		return {
			finalLevel:this.level,
			wxShare:false
		}
	},
	mounted:function(){

	},
	methods:{},
	computed:{
		re:function(){
			switch(true) {
				case (this.level == 0):{
					return {
						title:'你根本就没动啊！',
						description:'你色弱啊亲！'
					}
					break;
				}
				case (this.level > 0 && this.level < 10):{
					return {
						title:'哎呦喂',
						description:'你色弱啊亲！'
					}
					break;
				}
				case (this.level >= 10 && this.level < 30):{
					return {
						title:'哎呦！',
						description:'很色吗！我看好你哦！'
					}
					break;
				}
				default:{
					return {
						title:'哎呦！',
						description:'你这么色，你家那口子知道吗！'
					}
					break;
				}
			}
		}
	}

}
</script>

<style>
.result-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity 0.6s ease;
}
.share-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: table;
  transition: opacity 1.3s ease;
  background-image: url("../images/share.png");
  background-repeat: no-repeat;
  background-position: top right;
}
.result-wrapper {
	display: table-cell;
	vertical-align: middle;
}
.result-header h3 {
  margin-top: 0;
  color: #990066;
  font-size: 1.6em;
}

.result-header h3 {
  color: #990066;
  font-size: 1.6em;
}

.result-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.count-footer {
	text-align: right;
}
.count-footer button {
	cursor: pointer;
}
.showResult-enter {
  opacity: 0;
}

.showResult-leave-active {
  opacity: 0;
}

.showResult-enter .showResult-container,
.showResult-leave-active .showResult-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>