import React, { useState } from "react";
import { render } from "react-dom";

// class Random extends React.Component {
//   handleClick() {
//     const min = 1;
//     const max = 100;
//     const rand = min + Math.random() * (max - min);
//     this.setState({ random: this.state.random + rand });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick.bind(this)}>Click</button>
//         <div>The number is: {this.state.random}</div>
//       </div>
//     );
//   }
// }

// export default Random;

const Random = () => {
  const [random, setRandom] = useState(0);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [rand, setRand] = useState();

  return (
    <div>
      <button
        onClick={(e) => {
          rand = min + Math.random() * (max - min);
          setRandom(random + rand);
        }}
      >
        Click
      </button>
      <div>The number is: {random}</div>
    </div>
  );
};

export default Random;
