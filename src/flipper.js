import React, {Component} from "react";
import Coin from "./coin";

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCoin: 1,
      flips: 0,
      flipsH: 0,
      flipsT: 0,
    };

    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    let randSide = Math.floor(Math.random() * 2) + 1;

    this.setState((st) => {
      let newState = {
        ...st,
        currentCoin: randSide,
        flips: st.flips + 1,
      };
      randSide === 1 ? (newState.flipsH += 1) : (newState.flipsT += 1);

      return newState;
    });
  }

  render() {
    return (
      <div>
        <h1>Coin Flipper</h1>
        <Coin
          value={this.state.currentCoin}
          flipCount={this.state.flips}
          heads={this.state.flipsH}
          tails={this.state.flipsT}
        />
        <button onClick={this.flipCoin}>Flip</button>
      </div>
    );
  }
}

export default Flipper;
