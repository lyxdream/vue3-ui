<template>
  <div>
    <v-button-group>
       <v-button type="primary" icon="prev" position="left" @click="handler">上一页</v-button>
       <v-button type="primary" icon="next" position="right">下一页</v-button>
    </v-button-group>
  </div>
</template>

<script>
export default {
  setup(){
    const handler = ()=>{
        alert(1)
    }
    return {
      handler
    }
  }
}
</script>