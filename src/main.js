// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
	routes,
	strict: process.env.NODE_ENV !== 'production'
})
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.length > 0) {
    document.title = to.meta[0]
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
