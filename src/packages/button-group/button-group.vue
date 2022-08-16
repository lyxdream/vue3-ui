<template>
   <div class="v-button-group">
       <slot></slot>
   </div>
</template>
<script>
import { getCurrentInstance, onMounted } from '@vue/runtime-core'
export default {
  name:"VButtonGroup",
  setup(){
    onMounted(()=>{
      let contenxt = getCurrentInstance() //获取实例
      let ele = contenxt.ctx.$el;
      let children = ele.children;
      for(let i=0;i<children.length;i++){
        console.assert(children[i].tagName == 'BUTTON','包裹的元素必须是button')
      }
    })
  }
}
</script>