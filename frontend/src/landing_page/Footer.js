import React from 'react';
function Footer() {
    return (
        <footer styles={{ backgroundColor: "#e1eaf3ff" }}>
            <div className='container border-top mt-5' >
                <div className='row mt-5'>
                    <div className='col'><img src="media/images/logo.svg" alt="Logo" style={{ width: "50%" }} />
                        <p>&copy; 2010-2024, Not Zerodha Broking Ltd. All rights reserved</p>
                    </div>
                    <div className="col">
                        <p>Company</p>
                        <a href="">About</a><br />
                        <a href="">Pricing</a><br />
                        <a href="">Referral programme</a><br />
                        <a href="">Careers</a><br />
                        <a href="">Zerodha.tech</a><br />
                        <a href="">Press & media</a><br />
                        <a href="">Zerodha cares (CSR)</a><br />
                    </div>
                    <div className="col">
                        <p>Support</p>
                        <a href="">Contact</a><br />
                        <a href="">Support portal</a><br />
                        <a href="">Z-Connect blog</a><br />
                        <a href="">List of charges</a><br />
                        <a href="">Downloads & resources</a><br />
                    </div>
                    <div className="col">
                        <p>Account</p>
                        <a href="">Open an Account</a><br />
                        <a href="">Fund transfer</a><br />
                        <a href="">60 day challenge</a><br />
                    </div>

                </div>
                <div className="mt-5 text-small text-muted" style={{ fontSize: "14px" }}>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eget nunc.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eget nunc.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eget nunc.</p>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl eget nunc.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;