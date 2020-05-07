import * as React from 'react';

export default class Root extends React.Component {
  render() {
    const message: string = "React";

    const wrapperStyle = {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex"
    };
    const buttonStyle = {
      marginTop: 10,
      marginBottom: 10
    };

    return (
      <div style={wrapperStyle} >
        <h1> {message}</h1 >
        <wc-button type="primary" style={buttonStyle}>
          Primary button
        </wc-button>
        <wc-button disabled style={buttonStyle}>
          Disabled button
        </wc-button>
        <wc-button type="icon" style={buttonStyle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/64px-React-icon.svg.png" />
        </wc-button>
      </div >
    );
  }
}
