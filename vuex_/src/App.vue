<template>
  <div id="app">
    {{this.$store.state.age}} <br/>
    {{this.$store.getters.myAge}} <br/>
    {{this.$store.getters.myAge}} <br/>
    {{this.$store.getters.myAge}} <br/>
    {{this.$store.state.a.age}} <br/>
    {{this.$store.state.b.age}} <br/>
    <button @click="$store.commit('a/changeAge',10)">同步</button>
    <button @click="$store.commit('b/changeAge',10)">异步</button>
  </div>
</template>

<script>
  export default{
    mounted(){
    }
  }
</script>
