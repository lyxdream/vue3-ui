//Button组件可以单独使用
//import {Button} from './vue3-ui'
// app.use(Button)

import Button from './button.vue'
import '../../styles/button.scss'

Button.install = (app)=>{
  app.component(Button.name,Button)
}

export default Button