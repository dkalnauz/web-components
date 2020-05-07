import * as React from "react";

export default class Root extends React.Component {
  message: string = "React";
  isModalVisible = false;

  render() {
    const wrapperStyle = {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
    };

    return (
      <div style={wrapperStyle}>
        <h1> {this.message}</h1>
        <my-modal
          expanded={this.isModalVisible ? "" : null}
          closeCallback={() => (this.isModalVisible = false)}
        >
          <modal-header slot="header">Modal header</modal-header>
          <modal-content slot="content">
            Nullam neque sapien, tempor ut euismod vel, dapibus id arcu.
            Praesent ut tristique nunc, nec faucibus libero. Phasellus nec
            lectus sit amet diam.
          </modal-content>
        </my-modal>
        <my-button type="primary" onClick={() => (this.isModalVisible = true)}>
          Show plain text
        </my-button>
      </div>
    );
  }
}
