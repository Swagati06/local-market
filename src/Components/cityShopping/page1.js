import React, { Component } from 'react'

import shops from '../citypage/citypage1'

export default class page1 extends Component {
    render() {
        console.log(shops)
        return (
            <div className='p-4'>
                <div className='row'>
                    {shops.map(shop => {
                        return (
                            <div className='col-3'>
                                <div className='card'>
                                    <img class="card-img-top" src={shop.img} alt="shop img" />
                                    <div className='card-body'>
                                        <h5 class="card-title" className='font-weight-bold'>{shop.name}
                                        <br />
                                        {shop.address}<br />
                                        </h5>
                                        <p class="card-text"></p>
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
