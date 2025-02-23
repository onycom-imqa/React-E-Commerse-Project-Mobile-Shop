// import React, { Component } from "react";
import React from "react";

import {useIMQA} from "imqa-react-sdk";

// export default class CartColumns extends Component {
export default function CartColumns() {
  const IMQARef = useIMQA();
  // render() {
  return (
      <div ref={IMQARef}>
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row ">
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">products</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">name of product</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">price</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">quantity</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">remove</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">total</p>
            </div>
          </div>
        </div>
      </div>
  );
  // }
}
