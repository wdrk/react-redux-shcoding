import { createStore } from "redux";

// CreateStore(reducer(), redux 개발자 도구 활성화)
// reducer(데이터, 데이터에 할 동작)
export default createStore((state, action) => {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + action.size };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
