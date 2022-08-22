import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const ContentBanner = ({ contentBanner }) => {
  return (
    <div className="content-banner-container">
      <div>
        <h1>{contentBanner.largeText1}</h1>
        <h3>{contentBanner.midText}</h3>
        <p className="product-solo">{contentBanner.smallText}</p>
        <div className="desc">
          <h5>Description</h5>
          <p>{contentBanner.desc}</p>
        </div>
        <div>
          <Link href={`/product/${contentBanner.product}`}>
            <button type="button">{contentBanner.buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(contentBanner.image)} alt="headphones" className="content-banner-image" />
      </div>
    </div>
  )
}

export default ContentBanner