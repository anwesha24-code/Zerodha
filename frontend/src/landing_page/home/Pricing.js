import React from 'react';
function Pricing() {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>Flat Rs 20 per order, with no hidden charges.</p>
                    <a href='' className='mx-5' style={{ textDecoration: "none" }}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href='' style={{ textDecoration: "none" }}>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>Rs.0</h1>
                            <p>Free equity and <br />direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>Rs.20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;