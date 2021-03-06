import Vue from 'vue'
import App from './App.vue'

import store from './store'

new Vue({
  el: '#app',
  store,  //配置store选项，指定为store对象，会自动将store对象注入到所有子组件中，在子组件中通过this.$store访问该store对象
  render: h => h(App)
})
