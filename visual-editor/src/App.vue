<template>
<div>
  hello
<visual-editor v-model="jsonData" :config="visualConfig" />
</div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {VisualEditor} from './packages/visual-editor';
import {visualConfig} from './visual.config';
// import {TestUseModule} from './packages/utils/useModule';
export default defineComponent({
  name: 'App',
  components: {
    VisualEditor,
    // TestUseModule
  },
  data(){
    return {
      visualConfig,
      jsonData:{
        container:{
          heigth:500,
          width:800
        },
        blocks:[
          {
            top:100,
            left:100,
            componentKey:'button',
          },
          {
            top:200,
            left:200,
            componentKey:'input'
          },
        ]
      }
    }
  }
});
</script>


