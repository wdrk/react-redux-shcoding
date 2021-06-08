import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

// 리덕스 스토어에서 값을 변경할 때마다 이 함수를 호출함
const mapReduxStateToReactProps = state => {
  return {
    number: state.number,
  };
};

const mapReduxDispatchToReactProps = () => {
  return {};
};
export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayNumber);

// import React, { Component } from "react";
// import store from "../store";
// export default class extends Component {
//   constructor(props) {
//     super(props);
//     store.subscribe(() => {
//       this.setState({
//         number: store.getState().number,
//       });
//     });
//   }
//   state = {
//     number: store.getState().number,
//   };
//   render() {
//     return <DisplayNumber number={this.state.number}></DisplayNumber>;
//   }
// }
