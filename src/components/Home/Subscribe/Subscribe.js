import React from 'react';
import './Subscribe.css';
const Subscribe = () => {
    return (
        <section className="container w-100 h-auto mb-5 subs-container">
            <h2 className="text-sm-start subscribe-title">Subscribe to newsletter</h2>
            <div className="subscribe d-flex justify-content-between mt-4" > 
                <input className="form-control" type="text" placeholder="Subscribe to newsletter" required/>
                <button className="btn-subscribe">Subscribe</button>
            </div>
        </section>
    );
};

export default Subscribe;