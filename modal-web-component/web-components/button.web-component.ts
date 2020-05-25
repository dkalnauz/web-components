export class WcButton extends HTMLElement {
  element: HTMLButtonElement;
  elementShadow: any;
  buttonType: string;

  get type() {
    return this.buttonType;
  }

  set type(val) {
    this.buttonType = val;
    this.element.className = this.buttonType;
  }

  get disabled() {
    return this.element.hasAttribute('disabled');
  }

  set disabled(val) {
    if (val) {
      this.element.setAttribute('disabled', '');
    } else {
      this.element.removeAttribute('disabled');
    }
  }

  get template(): string {
    return `<slot></slot>`;
  }

  get getStyle(): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = componentStyle;

    return style;
  }

  static get observedAttributes() {
    return ['type', 'disabled'];
  }

  constructor() {
    super();
    this.elementShadow = this.attachShadow({
      mode: 'open'
    });
    this.element = document.createElement('button');
    this.element.id = 'my-button';
    this.elementShadow.appendChild(this.element);
  }

  connectedCallback() {
    this.elementShadow.appendChild(this.getStyle);
    this.element.innerHTML = this.template;
    this.element.className = this.buttonType;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type') {
      this.element.className = newValue;
      this.buttonType = newValue;
    }
    if (name === 'disabled') {
      this.disabled = true;
    }
  }
}
if (!window.customElements.get('my-button')) {
  customElements.define('my-button', WcButton);
}

// TODO: Move to separate file
const componentStyle = `
button {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #ed3330;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
}

button:hover:not(:disabled) {
  background: #fff;
  letter-spacing: 1px;
  box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
  transition: all 0.4s ease 0s;
}

button:active:not(:disabled) {
  background-color: #ed3330;
  color: #fff;
}

button:focus {
  outline: none;
}

button.primary, button.primary:visited {
  background-color: #ed3330;
  color: #ffffff;
}

button.primary:hover {
  background-color: #fce703;
  color: #000000;
}
button.primary:active {
  background-color: #fca703;
  color: #ffffff;
}

button:disabled,
button[disabled] {
  background-color: #686868;
  color: #ffffff;
  cursor: default;
}

button.icon {
  background-color: transparent;
  background-repeat: no-repeat;
  border: transparent;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  box-shadow: none;
  border-width: 0;
  border-color: transparent;
  fill: #93a4aa;
  padding: 0;
  background: transparent;
}

button.icon:hover {
  background-color: transparent;
  box-shadow: transparent;
  border-width: 0;
  border-color: transparent;
  fill: #ed3330;
}
`;