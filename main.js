import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import axios from 'axios';
Vue.prototype.$axios = axios;

import { Indicator } from 'mint-ui';
axios.interceptors.request.use((config)=>{
	Indicator.open();
	//config.url="http://localhost:3000"+config.url;
	return config;
})
axios.interceptors.response.use((res)=>{
	Indicator.close();
	return res.data.content.data.page.result;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
