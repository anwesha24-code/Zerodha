import React from 'react';
function Brokerage() {
    return (
        <div className="container">

            <div className='row text-center mt-5 p-5 border-top'>
                <div className='col-8 p-5'>
                    <a href='' style={{ textDecoration: "none" }}><h3 className="fs-5">Brokerage Calculator</h3></a>
                    <ul style={{ textAlign: "left", lineHeight: "2.5" }} className='text-muted fs-6'>
                        <li>Call & Trade and RMS auto0squareoff. Additional charges of 50+GST per order</li>
                        <li>Digital contract notes will be sent via e-mail</li>
                        <li>Demat account maintenance charges: ₹300+GST per annum</li>
                        <li>All charges are subject to applicable taxes</li>
                        <li>Brokerage charges are subject to change without prior notice</li>
                        <li>Refer to the list of charges for more details</li>
                    </ul>
                </div>
                <div className='col-4 p-5'>
                    <a href='' style={{ textDecoration: "none" }}><h3 className="fs-5">List of Charges</h3>
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Brokerage;