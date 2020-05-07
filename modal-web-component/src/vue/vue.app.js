import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Hello from './main.vue'

import '../../web-components/modal.web-component.ts';
import '../../web-components/button.web-component.ts';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    render: r => r(Hello)
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];