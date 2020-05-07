import { Component } from '@angular/core';

@Component({
  selector: 'angular',
  template: `
  <div class="app-wrapper">
  <h1>Angular</h1>
  <my-modal [attr.expanded]="isModalVisible ? '' : null" [closeCallback]="handleCloseModalCallback">
      <modal-header slot="header">Modal header</modal-header>
      <modal-content slot="content">
        Nullam neque sapien, tempor ut euismod vel, dapibus id arcu. Praesent ut tristique nunc, nec faucibus libero. Phasellus nec lectus sit amet diam.
      </modal-content>
  </my-modal>
  <my-button type="primary" (click)="isModalVisible = true">Show plain text</my-button>
</div>
  `,
  styles: [`
  .app-wrapper {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      display: flex;
    }
    `]
})
export class Main {
  isModalVisible: boolean = false;

  handleCloseModalCallback = () => {
    this.isModalVisible = false;
  }
}
