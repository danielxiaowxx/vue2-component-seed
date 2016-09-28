/**
 * 滚动置顶 directive
 */

import Vue from 'vue';

Vue.directive('demo', {
  bind() {
    this.el.innerText = 'Hello Directive';
  },
  update() {

  },
  unbind() {

  }
});