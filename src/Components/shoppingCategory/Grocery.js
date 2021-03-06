import React, { Component } from 'react'
import shops from '../../Data/GroceryShops'

export default class Grocery extends Component {
    render() {
        return (
            <div className='p-4'>
                <div className='row'>
                    {shops.map(shop => {
                        return (
                            <div className='col-3 mb-4'>
                                <div className='card'>
                                    <img class="card-img-top" src={shop.img} alt="shop img" style={{ height: 200 }} />
                                    <div className='card-body'>
                                        <h5 class="card-title" className='font-weight-bold'>{shop.name}</h5>
                                        <p class="card-text">Daily Needs grocery shops.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
