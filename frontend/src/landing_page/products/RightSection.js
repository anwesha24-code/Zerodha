import React from 'react';
function RightSection({ imageURL, productName, productDescription }) {
    return (
        <div className='container'>
            <div className='row '>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div >
                        <a href='#'>Learn More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className='col-6 '>
                    <img src={imageURL} alt={productName} className='' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;