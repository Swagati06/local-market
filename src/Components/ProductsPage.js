import React, { Component } from "react";

import products from "../Data/ClothingProducts";

export default class productPage extends Component {
  render() {
    return (
      <div className="p-4">
        <div className="row">
          {products.map((shop) => {
            return (
              <div className="col-3 mb-4">
                <div className="card">
                  <img
                    class="card-img-top"
                    src={shop.img}
                    alt="shop img"
                    style={{ height: 200 }}
                  />
                  <div className="card-body">
                    <h5 class="card-title" className="font-weight-bold">
                      {shop.name}
                    </h5>
                    <p class="card-text">Here some stylish cloths for you.</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
