import * as React from 'react';

type State = {
  clicked: number
}
export default class App extends React.Component<any, State> {
  state = {
    clicked: 0
  };

  handleClick() {
    const clickedNew = this.state.clicked + 1;
    this.setState( { clicked: clickedNew } )
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <div>Welcome to hot-reloading React written in TypeScript!</div>
        <button onClick={
                    (evt)=>{
                        evt.preventDefault();
                        this.handleClick();
                    }
                }>
          Click Me!
        </button>
        <div>
          <code><i>viete ako </i><b>{this.state.clicked}</b></code>
        </div>
      </div>
    );
  }
}