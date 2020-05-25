import * as singleSpa from 'single-spa';

singleSpa.registerApplication(
  'react',
  () => import('./react/main.js'),
  () => location.pathname === '/react' ? false : true);

singleSpa.registerApplication(
  'angular',
  () => import('./angular/main.js'),
  () => location.pathname === '/angular' ? false : true);

singleSpa.registerApplication(
  'vue',
  () => import('./vue/vue.app.js'),
  () => location.pathname === '/vue' ? false : true);

singleSpa.start();