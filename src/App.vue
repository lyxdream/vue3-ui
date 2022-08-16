<template>
  <div id="app">
    <!-- <v-button></v-button>
    <v-button-group></v-button-group>
    <v-icon></v-icon> -->
    <Button />
    <br>
    <ButtonGroup/>
     <br>
    <Icon />
  </div>
</template>

<script>
import Button from './../examples/button.vue'
import ButtonGroup from './../examples/button-group.vue'
import Icon from './../examples/icon.vue'
export default {
  name: 'App',
  components:{
    Button,
    ButtonGroup,
    Icon
  }
}
</script>

<style lang="scss">
</style>
