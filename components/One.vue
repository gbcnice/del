<template>
  <div class="about">
    <h1> one page</h1>
    <button @click="send">发送</button>
  </div>
</template>
<script>
export default {
	 methods:{
	 	send(){
	 		this.$root.$emit("two",123)
	 	}
	 }
}

</script>


