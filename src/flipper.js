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
     return{
       currentCoin: randSide,
        flips: st.flips + 1,
        flipsH: st.flipsH + (randSide === 1 ?  1 : 0),
        flipsT: st.flipsT + (randSide === 2 ?  1 : 0)
     }
      
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
