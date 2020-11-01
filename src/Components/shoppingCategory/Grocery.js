import React, { Component } from 'react'
import shops from '../../Data/GroceryShops'

export default class Grocery extends Component {
    render() {
        return (
            <div className='p-5'>
                <div className='row'>
                    {shops.map(shop => {
                        return (
                            <div className='col-3'>
                                <div className='card'>
                                    <img class="card-img-top" src={shop.img} alt="shop img" />
                                    <div className='card-body'>
                                        <h5 class="card-title" className='font-weight-bold'>{shop.name}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
