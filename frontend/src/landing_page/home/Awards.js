import React from 'react';
function Awards() {
    return (
        <div className="container mt-5">
            <div className='row text-center'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' alt='Largest Broker' className='mb-4' />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stock Broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className=' row'>
                        <div className='col-6 p-5'>
                            <ul className='text-start'>
                                <li><p>Future Derivatives</p></li>
                                <li><p>Commodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6 p-5'>
                            <ul className='text-start'>
                                <li><p>Stacks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="Pressed in The Times" className='mt-4' style={{width: "80%"}} />
                </div>

            </div>
        </div >
    );
}

export default Awards;