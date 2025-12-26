import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
    return (
        <div>
            <Hero />

            <LeftSection
                imageURL="media/images/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and powerful trading features."
                tryDemo="https://kite.zerodha.com/demo"
                learnMore="https://zerodha.com/products/kite"
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                appstore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
            />

            <RightSection imageURL="media/images/console.png" productName="Console" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and powerful trading features." />
            <LeftSection
                imageURL="media/images/coin.png"
                productName="Coin"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and powerful trading features."
                tryDemo="https://kite.zerodha.com/demo"
                learnMore="https://zerodha.com/products/kite"
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                appstore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
            />
            <RightSection imageURL="media/images/kiteconnect.png" productName="Kite Connect API" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and powerful trading features." />
            <LeftSection
                imageURL="media/images/varsity.png"
                productName="Varsity"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and powerful trading features."
                tryDemo="https://kite.zerodha.com/demo"
                learnMore="https://zerodha.com/products/kite"
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                appstore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
            />
            <p className="text-center mb-5 mt-5">Want to know more about our technology stack? Check out the Zerodha.tech</p>
            <p className='mb-5'>g</p>
            <Universe/>


        </div>
    );
}

export default ProductsPage;
