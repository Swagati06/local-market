import React, { Component } from 'react'
import shops from '../../Data/CosmaticsShops'

export default class Cosmetics extends Component {
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
                                        <p class="card-text">Cosmatic shop</p>
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
