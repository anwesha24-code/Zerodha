import React from 'react';
function Stats() {
    return (
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crorres worth of equity investments.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The Zerodha ecosystem</h2>
                    <p className='text-muted'>A complete ecosystem of products that work together to give you a seamless investing and trading experience.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>Do better with money, and make smarter decisions with your investments.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{ width: "90%" }} />
                    <div>
                        <a href='' className='mx-5' style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;