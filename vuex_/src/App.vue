<template>
  <div id="app">
    {{this.$store.state.age}} <br/>
    
    <button @click="$store.commit('changeAge',10)">11111</button>
  </div>
</template>

<script>
  export default{
    mounted(){
    }
  }
</script>
