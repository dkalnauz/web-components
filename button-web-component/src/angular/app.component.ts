import { Component } from '@angular/core';

@Component({
  selector: 'angular',
  template: `
    <div class="app-wrapper">
      <h1>Angular</h1>
      <wc-button type="primary">
          Primary button
      </wc-button>
      <wc-button disabled>
          Disabled button
      </wc-button>
      <wc-button type="icon">
          <img style="-webkit-user-select: none;margin: auto;"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/64px-Angular_full_color_logo.svg.png">
      </wc-button>
    </div>
  `,
  styles: [`
  .app-wrapper {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
    }

    wc-button {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    `]
})
export class Main {
}
