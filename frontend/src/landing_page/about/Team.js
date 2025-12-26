import React from 'react';
function Team() {
    return (
        <div className="container">
            <div className='row p-3 border-top'>
                <h1 className='text-center mt-5 '>People</h1>
            </div>
            <div className='row p-5 mt-5 text-muted' style={{ lineHeight: "1.8rem", fontSize: "1.2em" }}>
                <div className='col-6 p-5 text-center'>
                    <img src="media/images/nithinKamath.jpg" alt="Nitin Kamath" className="img-fluid rounded-circle" style={{ width:"50%" }} />
                    <h4 className='mt-3'>Nithin Kamath</h4>
                    <h5 className='text-muted'>Founder, CEO</h5>
                </div>
                <div className='col-6 p-5'>
                    <p>lorem ipsum
                        We pioneered discount broking in India and have grown to become the largest stockbroker in the country by active clients.<br /> We enable millions of Indians to invest and trade in stocks, derivatives, mutual funds, bonds, and more through our cutting-edge platforms - all at highly competitive prices.
                    </p>
                    <p>lorem ipsum
                        We pioneered discount broking in India and have grown to become the largest stockbroker in the country by active clients.
                    </p>
                    <p>Connect on <a href="#">LinkedIn</a> | <a href="#">Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;