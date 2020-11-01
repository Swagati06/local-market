import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-dark pt-5'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our Local to Vocal sale
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Enter Your Email'
            />

          </form>
          <button className='btn btn-danger'>SUBSCRIBE</button>
        </div>
      </section>
      {/* <div className='row no-gutters'>
        <div className='col-3'>
          <h2>About Us</h2>
          <Link to='/sign-up' className='w-100'>How it works</Link>
          <Link to='/' className='w-100'>Testimonials</Link>
          <Link to='/'>Careers</Link>
          <Link to='/'>Investors</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        <div className='col-3'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
        </div>
        <div className='col-3'>
          <h2>Videos</h2>
          <Link to='/'>Submit Video</Link>
          <Link to='/'>Ambassadors</Link>
          <Link to='/'>Agency</Link>
          <Link to='/'>Influencer</Link>
        </div>
        <div className='col-3'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </div>
      </div> */}
      <div className='row no-gutters text-center align-items-center'>
        <div class='col-4'>
          <h2 className='text-light'>VENDO</h2>
        </div>
        <div className='col-4'>
          <small class='website-rights'>VENDO © 2020</small>
        </div>
        <div className='col-4 d-flex justify-content-end pr-5'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube-play' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa fa-linkedin-square' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
