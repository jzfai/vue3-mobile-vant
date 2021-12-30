import { Button } from 'vant'
const ant = {
  install(Vue) {
    console.log('Button.name, Button', Button.name, Button)
    Vue.component(Button.name, Button)
  }
}
export default ant
