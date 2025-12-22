import React from 'react';
function Education() {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' alt='education' style={{width:"70%"}} />
                </div>
                <div className='col-6'>
                    <h1 className='mb-3'>Free and open market education</h1>
                    <p>Learn about investing and trading with our comprehensive educational resources.</p>
                    <a href='' className='mx-5' style={{ textDecoration: "none" }}>Versity<i class="fa-solid fa-arrow-right-long"></i></a>
                    <p>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{ textDecoration: "none" }}>Trading Q&A<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>

        </div>
    );
}

export default Education;