import React, { useEffect } from 'react';
import './Subscribe.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Subscribe = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000});
    })
    return (
        <section data-aos="fade-up" className="container w-100 h-auto mt-5 mb-5 subs-container">
           <div className="">
           <h2 className="text-sm-start subscribe-title">Subscribe to newsletter</h2>
            <div className="subscribe d-flex justify-content-between mt-4" > 
                <input className="form-control input-text" type="text" placeholder="Your Email" required/>
                <button className="btn-subscribe">Subscribe</button>
            </div>
           </div>
        </section>
    );
};

export default Subscribe;