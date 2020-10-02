import React, { Component } from 'react'

export default class signup extends Component {
    render() {
        return (
            <div className='h-100 row no-gutters w-100 justify-content-center align-items-center' style={{ fontSize: 19 , fontFamily: 'arial' , borderradius : '15 px' }}>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4"><b>Email</b></label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="name@gmail.com" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4"><b>Password</b></label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress"><b>Temporary Address</b></label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Temporary Address"></input>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2"><b>Permanent Address</b> </label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Permanent address" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label for="inputCity"><b>City</b></label>
                            <input type="text" class="form-control" id="inputCity" placeholder = "City name" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState"><b>State</b></label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip"><b>Zip</b></label>
                            <input type="text" class="form-control" id="inputZip" placeholder = "Zipcode"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                <b>I accept all the Terms and Conditions </b>
      </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary"><b>Sign Up</b></button>
                </form>
            </div>
        )
    }
}
