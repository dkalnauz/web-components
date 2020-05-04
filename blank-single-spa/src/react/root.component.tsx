import * as React from 'react';

export default class Root extends React.Component<any, any> {
  render() {
    const message: string = "React";

    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}
