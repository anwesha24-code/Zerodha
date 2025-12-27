import React from 'react';
function Hero() {
    return (
        <div className="container">
            <div className='row text-center mt-5 p-5 border-bottom'>
                <h1 className="fs-3">Pricing</h1>
                <h3 className='text-muted fs-5'>Free equity investments and no hidden charges</h3>
            </div>
            <div className='row text-center mt-5 p-5 '>
                <div className='col-4 p-5'>
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹20 or ₹0 equity delivery charges</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="media/images/intradayTrades.svg" />
                    <h1 className="fs-3">Commodity trading</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free - 0 brokerage</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="media/images/pricingMF.svg" />
                    <h1 className="fs-3">Currency trading</h1>
                    <p className='text-muted'>Flat ₹20 or ₹0 currency delivery charges</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;