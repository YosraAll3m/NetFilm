import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot} from "recoil";
import "./index.css";
import App from "./main";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <RecoilRoot>
      <App />
      </RecoilRoot>
     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);