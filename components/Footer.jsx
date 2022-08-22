import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-row">
          <div className="footer-column">
            <h2>YOUTH Fashion Store</h2>
            <p>2022 - All Rights Reserved.</p>
          </div>
          <div className="footer-column">
            <h2>About Us</h2>
            <a href="#">Our Products</a>
            <a href="#">Our Story</a>
            <a href="#">Our Contact</a>
          </div>
          <div className="footer-column">
            <h2>Find Us Online</h2>
            <p className="icons">
              <AiFillFacebook />
              <a href="https://www.facebook.com/" target="_blank">Facebook</a>
            </p>
            <p className="icons">
              <AiFillInstagram />
              <a href="https://www.instagram.com/" target="_blank">Instagram</a>
            </p>
            <p className="icons">
              <AiFillYoutube />
              <a href="https://www.youtube.com/" target="_blank">YouTube</a>
            </p>
          </div>
          <div className="footer-column">
            <h2>Locate Us</h2>
            <a href="https://www.google.com/maps/place/District+1,+Ho+Chi+Minh+City,+Vietnam/@10.7752187,106.6808529,14z/data=!3m1!4b1!4m5!3m4!1s0x31752f38f9ed887b:0x14aded5703768989!8m2!3d10.7756587!4d106.7004238" target="_blank">Branch 1: Dist 1, Ho Chi Minh City</a>
            <a href="https://www.google.com/maps/place/District+5,+Ho+Chi+Minh+City,+Vietnam/@10.755861,106.6600377,15z/data=!3m1!4b1!4m5!3m4!1s0x31752efb7d184b87:0xab92c1d33fffeb7!8m2!3d10.7540279!4d106.6633746" target="_blank">Branch 2: Dist 5, Ho Chi Minh City</a>
            <a href="https://www.google.com/maps/place/District+11,+Ho+Chi+Minh+City,+Vietnam/@10.7659856,106.6119911,14z/data=!3m1!4b1!4m5!3m4!1s0x31752e949d027e49:0x393b1836f8742615!8m2!3d10.7629739!4d106.650084" target="_blank">Branch 3: Dist 11, Ho Chi Minh City</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer