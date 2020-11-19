<template>
  <div id="app">
    {{this.$store.state.age}} <br/>
    {{this.$store.getters.myAge}} <br/>
    {{this.$store.getters.myAge}} <br/>
    {{this.$store.getters.myAge}} <br/>
    <button @click="$store.commit('changeAge',10)">同步</button>
    <button @click="$store.dispatch('changeAge',10)">异步</button>
  </div>
</template>

<script>
  export default{
    mounted(){
    }
  }
</script>
