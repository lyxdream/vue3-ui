<template>
  <svg class="v-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>
<script>
import './font'
export default {
  name:"VIcon",
  props:{
    icon:String
  }
}
</script>