import Vue from 'vue'
import App from './App.vue'
let math = require('mathjs');
// const { create, all } = require('mathjs')
// const config = {
// number:'BigNumber',
// precision:20
// }
// const math = create(all,config)

Vue.config.productionTip = false
Vue.config.keyCodes = { //自訂按鍵修飾福
  num0: [48,96],
  numone: [49,97], // f1
  num2: [50,98],
  num3: [51,99],
  num4: [52,100],
  num5: [53,101],
  num6: [54,102],
  num7: [55,103],
  num8: [56,104],
  num9: [57,105],
  add: 107, //+
  subtract: 109, //-
  multiply: 106, //*
  divide: 111, ///
  decimal: 110, //.
  backspace: 8,
  delete: 46,
};
Vue.prototype.$math = math
new Vue({
  render: h => h(App),
}).$mount('#app')
