import React, { useEffect } from 'react';
import './PaidBlog.css';
import paidOne from '../../../img/paidOne.jpeg'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PaidBlog = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    return (
        <section className="container w-100 section-container">
            <h2 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="flip-down" className="paid-header w-100 text-center mt-4 pt-4">Paid Blog</h2>
            <hr />
            <p className="text-start">Paid Members</p>
            <div data-aos="fade-up" data-aos-duration="3000" className="row w-100 shadow-sm pb-5">

                <div className="col-md-6 paid-container">
                    <div className="card">
                        <div className="paid-title justify-content-around">
                            <h3 className="paid-title">You’ve gotta <br /> be natural</h3>
                            <img className="paid-img" src={paidOne} alt="" />
                        </div>
                        <p className="paid-head">Hannah Weastell and others — 2 min read</p>
                        <p className="paid-description card-TextContent">Sed tamen intellego quid velit. Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium.</p>

                        <div className="paid-footer d-flex justify-content-between">
                            <p className="paid-content font-weight-bold tags">#design {" "} #idea {" "} #creative</p>
                            <Link to=""><button className="paid-btn"> Read More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 paid-container">
                    <div className="card">
                        <div className="paid-title justify-content-around">
                            <h3 className="paid-title">You’ve gotta <br /> be natural</h3>
                            <img className="paid-img" src={paidOne} alt="" />
                        </div>
                        <p className="paid-head">Hannah Weastell and others — 2 min read</p>
                        <p className="paid-description card-TextContent">Sed tamen intellego quid velit. Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium.</p>

                        <div className="paid-footer d-flex justify-content-between">
                            <p className="paid-content font-weight-bold tags">#design {" "} #idea {" "} #creative</p>
                            <Link to=""><button className="paid-btn"> Read More</button></Link>
                        </div>
                    </div>
                </div>
                {/* paid-03 */}
                <div className="col-md-6 paid-container mt-4">
                    <div className="card">
                        <div className="paid-title justify-content-around">
                            <h3 className="paid-title">You’ve gotta <br /> be natural</h3>
                            <img className="paid-img" src={paidOne} alt="" />
                        </div>
                        <p className="paid-head">Hannah Weastell and others — 2 min read</p>
                        <p className="paid-description card-TextContent">Sed tamen intellego quid velit. Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium.</p>

                        <div className="paid-footer d-flex justify-content-between">
                            <p className="paid-content font-weight-bold tags">#design {" "} #idea {" "} #creative</p>
                            <Link to=""><button className="paid-btn"> Read More</button></Link>
                        </div>
                    </div>
                </div>
                {/* paid-04 */}
                <div className="col-md-6 paid-container mt-4">
                    <div className="card">
                        <div className="paid-title justify-content-around">
                            <h3 className="paid-title">You’ve gotta <br /> be natural</h3>
                            <img className="paid-img" src={paidOne} alt="" />
                        </div>
                        <p className="paid-head">Hannah Weastell and others — 2 min read</p>
                        <p className="paid-description card-TextContent">Sed tamen intellego quid velit. Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium.</p>

                        <div className="paid-footer d-flex justify-content-between">
                            <p className="paid-content font-weight-bold tags">#design {" "} #idea {" "} #creative</p>
                            <Link to=""><button className="paid-btn"> Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaidBlog;