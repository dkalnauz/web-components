import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './app.component.tsx';

import '../../web-components/modal.web-component.ts';
import '../../web-components/button.web-component.ts';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('react');
  if (!el) {
    el = document.createElement('div');
    el.id = 'react';
    document.body.appendChild(el);
  }

  return el;
}
