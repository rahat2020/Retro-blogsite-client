import React, { useEffect } from 'react';
import './HeaderMain.css';
import blogOne from '../../../img/blogOne.png';
import blogTwo from '../../../img/blogTwo.png';
import blogThree from '../../../img/blogThree.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const HeaderMain = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000});
    })
    return (
        <div data-aos="fade-down" className="container font div-container">
            <h2 className="header-title font">Trending Topics</h2>
            <hr/>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-7">
                                        <div className="header-data">
                                            <h2>Why build smart house</h2>
                                            <p>A smart house is a home that has highly advanced,</p>
                                            <button className="btn-header">Read more</button>
                                        </div>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <img src={blogOne} class=" header-img  img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div class="row  d-flex align-items-center">
                                    <div class="col-md-7 header-data">
                                    <div className="header-data">
                                            <h2>Why are leaves green?</h2>
                                            <p>The leaves of most plants are green, because...</p>
                                            <button className="btn-header">Read more</button>
                                        </div>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <img src={blogTwo} class=" header-img img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div class="row  d-flex align-items-center">
                                    <div class="col-md-7 header-data">
                                    <div className="header-data">
                                            <h2>Why you should not eat apples?</h2>
                                            <p>Apples are acidic and thus too much of it can damage your teeth</p>
                                            <button className="btn-header">Read more</button>
                                        </div>
                                    </div>
                                    <div class="col-md-5 mt-3">
                                        <img src={blogThree} class=" header-img img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderMain;