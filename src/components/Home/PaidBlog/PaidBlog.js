import React from 'react';
import './PaidBlog.css';
import paidOne from '../../../img/paidOne.jpeg'
import { Link } from 'react-router-dom';
const PaidBlog = () => {

    return (
        <section className="container w-100 section-container">
            <h2 className="paid-header w-100 text-center mt-5 pt-5">Paid Blog</h2>
            <p className="text-start">Paid Members</p>
            <div className="row w-100 shadow-sm pb-5">

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
            </div>
        </section>
    );
};

export default PaidBlog;