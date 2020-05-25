const componentStyle = `
:host(my-modal[expanded]) {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

:host(my-modal) {
  display: none;
}

.modal {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.modal-header {
  color: var(--modal-header-text-color, #004A72);
  font-family: var(--main-font-family, 'Open Sans');
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.15px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-right: 10px;
  margin-bottom: 19px;

}

.icon-close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.icon-close:hover,
icon-close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`;

const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
<div class="modal">
    <style>${componentStyle.toString()}</style>
    <div class="modal-header">
        <div class="modal-header__title">
            <slot name="header"></slot>
        </div>
        <div class="icon icon-close" style="position: relative;">&times;</div>
    </div>
    <div class="modal-content">
        <slot name="content"></slot>
    </div>
</div>
  `;

export class MyModal extends HTMLElement {
  _closeCallback() {};

  set closeCallback(val) {
    this._closeCallback = val;
  }

  constructor() {
    super();

    [
      '_closeCallback'
    ].forEach((method) => {
      this[method] = this[method].bind(this)
    });

    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(modalTemplate.content.cloneNode(true));

    var element = this.shadowRoot.querySelector('.icon.icon-close');
    element.addEventListener('click', e => {
      this.collapsePanel();
    });
  }

  collapsePanel() {
    if (this._closeCallback) {
      this._closeCallback();
    }
  };
}

if (!window.customElements.get('my-modal')) {
  customElements.define('my-modal', MyModal);
}