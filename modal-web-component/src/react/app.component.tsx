import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  message: string = "React";
  isModalVisible: boolean;

  handleCloseModalCallback(e) {
    var el = document.querySelector("my-modal");
    el.removeAttribute("expanded");
  }

  expandModal = () => {
    var el = document.querySelector("my-modal");
    el.toggleAttribute("expanded");
  };

  render() {
    const wrapperStyle = {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
    };

    return (
      <div style={wrapperStyle}>
        <h1> {this.message} </h1>
        <my-modal onClick={this.handleCloseModalCallback}>
          <modal-header slot="header"> Modal header </modal-header>
          <modal-content slot="content">
            Nullam neque sapien, tempor ut euismod vel, dapibus id arcu.Praesent
            ut tristique nunc, nec faucibus libero.Phasellus nec lectus sit amet
            diam.
          </modal-content>
        </my-modal>
        <my-button type="primary" onClick={this.expandModal}>
          Show plain text
        </my-button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
