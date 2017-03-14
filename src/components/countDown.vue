<template>
<transition name="countDown">
<div class="count-mask">
	<div class="count-wrapper">
		<div class="count-container">
			<div class="count-header">
				<slot name="header">
					defalut header
				</slot>
			</div>

			<div class="count-body">
				<slot name="body">倒计时：</slot>{{innerCount}}

			</div>



		</div>
	</div>
</div>

</transition>
</template>

<script>
export default {
	props:{
		initCount:Number
	},
	data:function(){
		return {
			innerCount:this.initCount
		}
	},
	mounted:function(){
		var self = this
		setInterval(function(){
			self.innerCount--
		},1000)
	},
	watch:{
		innerCount:function(val){
			if (val == 0) {
				this.$emit("down")
			}
		}
	}
}
</script>

<style>
.count-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.count-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.count-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.count-header h3 {
  margin-top: 0;
  color: #990066;
  font-size: 1.6em;
}

.count-body {
  margin: 20px 0;
}

.count-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.countDown-enter {
  opacity: 0;
}

.countDown-leave-active {
  opacity: 0;
}

.countDown-enter .countDown-container,
.countDown-leave-active .countDown-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>