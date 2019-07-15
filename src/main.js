import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload';
import './assets/css/style.scss'
import './assets/css/iconfont.css';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: '/assets/img/loading-bars.svg'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
