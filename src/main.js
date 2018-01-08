import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ajax from './config/ajax'
import FastClick from './config/fastclick'
import {
  basePath,
  weixinOrder,
  activeTopicId
} from './config/config';
import './rem';
import './style/common';
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
