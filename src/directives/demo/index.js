/**
 * 滚动置顶 directive
 */

import Vue from 'vue';
import _assign from 'lodash-es/assign';

Vue.directive('demo', {
  bind(el, binding) {
    var defOptions = {
      msg: 'Hello',
    };

    var options = _assign(defOptions, binding.value);

    el.innerText = options.msg;
  },
  unbind() {
    console.log('unbind')
  }
});
