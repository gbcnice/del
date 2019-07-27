<template>
  <div class="about">
    <h1> Two page {{str}}</h1>
  </div>
</template>
<script>
export default {
	data(){
		return {
			str:''
		}
	},
	created(){
		this.$root.$on("two",(msg)=>{
			this.str=msg
		})
	}
}

</script>