<template>
  <button :class="classs" :disabled="loading">
    <v-icon :icon="icon" v-if="icon&&!loading" class="icon"></v-icon>
     <v-icon icon="loading" v-if="loading" class="icon loading"></v-icon>
     <span v-if="$slots.default">
        <slot></slot>
     </span>
  </button>
</template>
<script>
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "VButton",
  props: {
    type: {
      type: String,
      default: "primary",
      valiator(type) {
        if (!["warning", "success", "danger", "info", "primary"].includes(type)) {
          throw new Error(
            `
             "组件的type类型必须为:" +
              ["warning", "success", "danger", "info", "primary"].join("、")
              `
          );
        }
        return true;
      },
    },
    icon:String,
    loading:{
      tyype:Boolean,
      default:false
    },
    position:{
      type:String,
      default:'left'
    }
  },
  setup(props) {
    const classs = computed(() =>[
      "v-button",
       `v-button--${props.type}`,
       `v-button--${props.position}`
    ])
    return {
      classs
    }
  },
});
</script>
