import React from 'react';
import './Sell.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Shopping!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cloth.jpg'
              text='CLOTHING'
              label='Cloths'
              path='/services'
            />
            <CardItem
              src='images/electronic.jpg'
              text='ELECTRONICS'
              label='ELECTRONIC'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cosmatic.jpg'
              text='COSMATICS                    '
              label='COSMATICS'
              path='/services'
            />
            <CardItem
              src='images/grocery.jpg'
              text='GROCERY                       '
              label='GROCERY'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='HOME&KITCHEN           '
              label='HOME'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
