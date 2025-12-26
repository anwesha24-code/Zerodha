import React from 'react';
function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='mt-5'>Extend your trading and investment experience with our ecosystem of products and services.</p>


                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png" className='' />
                    <p className='text-small text-muted'>Smallcase</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" className='' style={{ width: "50%" }} />
                    <p className='text-small text-muted'>Streak Tech</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" className='' style={{ width: "70%" }} />
                    <p className='text-small text-muted'>sensibullLogo</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" className='' style={{ width: "55%" }} />
                    <p className='text-small text-muted'>Zerodha Fund House</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png" className='' style={{ width: "60%" }} />
                    <p className='text-small text-muted'>GoldenPi</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" className='' style={{ width: "35%" }} />
                    <p className='text-small text-muted' >Ditto</p>
                </div>
                <button style={{ width: "20%", margin: "0 auto" }} className='p-2 btn btn-primary fs-5 mb-5'>Signup Now</button>

            </div>
        </div>
    );
}

export default Universe;