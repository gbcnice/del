<template>
  <div id="app">
    <div id="nav">
      <One />
      <Two />
    </div>
    <router-view/>
  </div>
</template>
<script>
    import One from "./components/One"
    import Two from "./components/Two"
   
    export default {
        components:{
          One,Two
        },
        created(){
          this.$axios.get("/lg/listmore.json?pageNo=2&pageSize=15").then((res)=>{
              console.log(res)
            
          })
        }
    }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
