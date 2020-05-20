import React, {Component} from "react";
import Flipper from "./flipper";
import "./coin.css";

class Coin extends Component {
  render() {
 
    return (

      <div>
        {this.props.value === 1 ? (
          <img
            className="coin"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
          />
        ) : (
          <img
            className="coin"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png"
          />
        )}

        <h1>There have been {this.props.flipCount} flips. {this.props.heads} have been heads and {this.props.tails} have been tails. </h1>
      </div>
    );
  }
}

export default Coin;
