import React from "react";
import { Navigate } from "react-router";

export class RedirectHomeButton extends React.Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false,
    };
  }

  changeRedirectStatus = () => {
    this.setState({ shouldRedirect: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeRedirectStatus}>Return Home</button>
        {this.state.shouldRedirect && <Navigate to="/" />}
      </div>
    );
  }
}
