import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import cardblogOne from '../../../img/cardblogOne.png';
import cardblogTwo from '../../../img/cardblogTwo.png';
import cardblogThree from '../../../img/cardblogThree.png';
import userone from '../../../img/userone.jpg';

const Blog = () => {
    return (
        <div className="container">
            <h2 className="blog-title text-center mt-5 pt-5 font">Blogs</h2>
            <hr/>
            <div className="row shadow-sm">
                <div className="col-md-4">
                    <div className="card-container mt-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img class="card-img-top card-img" src={cardblogOne} alt="" />
                            <div class="card-body">
                                <h6 class="card-title">Business, travel <span className="date">-July 2, 2020</span> </h6>
                                <h4 className="card-description">Your most unhappy customers are your greatest source of learning.</h4>
                                <p class="card-text card-TextContent mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts..</p>
                                <div className="card-author">
                                    <img className="author-img" src={userone} alt="" />
                                    <p className="author-name">Jhons snow <br /> <span className="author-passion">CEO and Founder</span> </p>
                                </div>
                                <Link to="" > <button className="btn-readmore">Read More</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-container mt-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img class="card-img-top card-img" src={cardblogTwo} alt="" />
                            <div class="card-body shadow-sm">
                                <h6 class="card-title">Business, travel <span className="date">-July 2, 2020</span> </h6>
                                <h4 className="card-description">Your most unhappy customers are your greatest source of learning.</h4>
                                <p class="card-text card-TextContent mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts..</p>
                                <div className="card-author">
                                    <img className="author-img" src={userone} alt="" />
                                    <p className="author-name">Jhons snow <br /> <span className="author-passion">CEO and Founder</span> </p>
                                </div>
                                <Link to="" > <button className="btn-readmore">Read More</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-container mt-4">
                        <div class="card" style={{ width: '22rem' }}>
                            <img class="card-img-top card-img" src={cardblogThree} alt="" />
                            <div class="card-body">
                                <h6 class="card-title">Business, travel <span className="date">-July 2, 2020</span> </h6>
                                <h4 className="card-description">Your most unhappy customers are your greatest source of learning.</h4>
                                <p class="card-text card-TextContent mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts..</p>
                                <div className="card-author">
                                    <img className="author-img" src={userone} alt="" />
                                    <p className="author-name">Jhons snow <br /> <span className="author-passion">CEO and Founder</span> </p>
                                </div>
                                <Link to="" > <button className="btn-readmore">Read More</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;