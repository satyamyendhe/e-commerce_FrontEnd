import React from 'react';

export default function Home() {
    return (
        <div className='background'>
            <div className="card bg-dark text-white border-0">
                <img src="/images/bg.jpg" className="card-img" alt="backgroundimage" height="640px" width='auto'/>
                <div className="card-img-overlay d-flex flex-column justify-content-top">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">E-Commerce by Satyam</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
