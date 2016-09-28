/**
 * 滚动置顶 directive
 */

import Vue from 'vue';
import _assign from 'lodash-es/assign';

Vue.directive('demo', {
  bind() {
    
  },
  update(options) {
    var defOptions = {
      msg: 'Hello',
    };

    options = _assign(defOptions, options);

    this.el.innerText = options.msg;
  },
  unbind() {

  }
});