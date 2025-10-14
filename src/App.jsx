import React from "react";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState((previousState) => {
              return {
                count: previousState.count + 1,
              };
            });
          }}
        >
          Count is: {this.state.count}
        </button>
      </>
    );
  }
}
