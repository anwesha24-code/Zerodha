import React from 'react';
function Hero() {
    return (
        // container-fluid stretches the container end-to-end
        <div className="container-fluid" id="supportHero">
            
            <div className='p-5' id="supportWrapper">
                <h4 className='fs-2'>Support Portal</h4>
                <a href="" className='fs-5'>Track Ticket</a>
            </div>
            <div className='row p-5 m-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-3 pb-3'>Search for an answer or above help topics<br/>to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O'/><br/>
                    <a href=''style={{color:'white'}}>Track account Openings</a><br/>
                    <a href='' style={{color:'white'}}>Track segment activation</a><br/>
                    <a href='' style={{color:'white'}}>Intraday margins</a><br/>
                    <a href='' style={{color:'white'}}>Kite user manual</a><br/>
                </div>
                <div className='col-6 p-5 ml-5'>
                    <h1 className='fs-3'> Featured</h1>
                    <ol>
                        <li><a href='' style={{color:'white'}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href='' style={{color:'white'}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Hero;