import Icon from './icon';
import Button from './button'
import ButtonGroup from './button-group'

const plugins = [
  Icon,
  Button,
  ButtonGroup
]

const install = (app)=>{
  plugins.forEach((plugin)=>{
    app.use(plugin)
  })
}
export default { 
  install
}