//Button组件可以单独使用
//import {ButtonGroup} from './vue3-ui'
// app.use(ButtonGroup)

import ButtonGroup from './button-group.vue'
import '../../styles/button-group.scss'

ButtonGroup.install = (app)=>{
  app.component(ButtonGroup.name,ButtonGroup)
}

export default ButtonGroup

