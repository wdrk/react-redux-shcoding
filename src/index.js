import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; /* store를 가져오기 위해서 App컴포넌트의 상위 컴포넌트를 import */
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Provider 컴포넌트는 반드시 store prop을 설정해야 함 */}
      {/* Provider 하위 컴포넌트들은 모두 store prop에 접근할 수 있다 */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
