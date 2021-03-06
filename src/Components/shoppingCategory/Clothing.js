import React, { Component } from "react";
import { Link } from "react-router-dom";

import shops from "../../Data/ClothingShops";

export default class Clothing extends Component {
  render() {
    // console.log(shops)
    return (
      <div className="p-4">
        <div className="row">
          {shops.map((shop) => {
            return (
              <div className="col-3 mb-4">
                <Link to="/clothingProducts">
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
