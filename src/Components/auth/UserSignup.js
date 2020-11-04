import React, { Component } from "react";
import "./Admin.css";

export default class AdminSignup extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body pt-0">
          <h3 className="card-title d-inline-flex justify-content-center py-1 px-3 mb-5">
            User Register
          </h3>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>

                <input
                  type="email"
                  class="form-control my-form-control"
                  id="inputEmail4"
                  placeholder="name@gmail.com"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  class="form-control my-form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>

              <input
                type="text"
                class="form-control my-form-control"
                id="inputAddress"
                placeholder="Your Adddress"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>

                <input
                  type="text"
                  class="form-control my-form-control"
                  id="inputCity"
                  placeholder="Enter your city"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control my-form-control">
                  <option>Maharashtra</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>

                <input
                  type="text"
                  class="form-control my-form-control"
                  id="inputZip"
                  placeholder=" ZIPcode "
                />
              </div>
            </div>

            <button className="btn btn-light w-25 mt-5">Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}
