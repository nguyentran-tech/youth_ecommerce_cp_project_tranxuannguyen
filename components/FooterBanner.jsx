import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{largeText1}</h3>
          <p>{largeText2}</p>
          <p>{smallText}</p>
          <p>{desc}</p>
        </div>
        <div className="right">
          <h3>{midText}</h3>
          <p>{discount}</p>
          <p>{saleTime}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image" />
      </div>
    </div>
  )
}

export default FooterBanner