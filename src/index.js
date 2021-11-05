import { StrictMode } from "react";
import * as React from "react";
import ReactDOM from "react-dom";
import {
  RFTComponent,
  SelectOneParam,
  ParamsListView,
  paramsList,
  Card
} from "./rftComponent";
import App from "./App";
import { MenuComponent } from "./modelSelect";
import { Box } from "@material-ui/core";

let params = [
  { ab: 3.2, bb: 1.05, cb: 2.5, db: 0.38 },
  { ab: 3, bb: 1.12, cb: 2.5, db: 0.35 },
  { ab: 2.8, bb: 1.2, cb: 2.5, db: 0.32 }
];
let cparams = [1, 1.06, 0.8];
let c = 1;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div id="result"></div>

    <MenuComponent />
    <App />
    <RFTComponent />

    <ParamsListView list={paramsList} />
  </StrictMode>,
  rootElement
);

function calculate(kloc) {
  let model = this.model;

  console.log(model);
  c = CCalc();

  return resCalc(kloc, this.model, c);
}

function CCalc() {
  let c = 1;
  let rft = this.res;

  console.log(this.res, "ccalc");
  let key = Object.keys(rft);
  key.forEach((item) => {
    console.log(item);
    console.log(c);
    c = c * rft[item];
  });
  console.log(c);
  return c;
}

function resCalc(kloc, model, c) {
  let res = [];

  let { ab, bb, cb, db } = params[model];

  res.push((ab * Math.pow(kloc, bb) * c).toFixed(2));
  res.push((cb * Math.pow(res[0], db)).toFixed(2));
  res.push((res[0] / res[1]).toFixed(2));
  res.push(((kloc * 1000) / res[0]).toFixed(2));

  document.sal = res;

  return res;
}

let calc = document.getElementById("calc");

let gkloc = 5;

function getKLOC() {
  gkloc = document.getElementById("KLOC").value;
  console.log(gkloc);
}

calc.addEventListener("click", () => {
  getKLOC();
  let results = calculate(gkloc);
  ReactDOM.render(<Card />, document.getElementById("result"));
  console.log(results);
});
