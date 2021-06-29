import React from 'react';
import './HeaderMain.css';
import blogOne from '../../../img/blogOne.png';
import blogTwo from '../../../img/blogTwo.png';
import blogThree from '../../../img/blogThree.png';
const HeaderMain = () => {
    return (
        <div className="container font div-container">
            <h2 className="header-title font">Trending</h2>
            {/* <hr/> */}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-7">
                                        <div className="header-data">
                                            <h2>MEGA LCD TV FOR SPORTS</h2>
                                            <p>this is the worlds best tv that i've ever made to watch fifa world cup</p>
                                            <button className="btn-header">Read more</button>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
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
                                            <h2>MEGA LCD TV FOR SPORTS</h2>
                                            <p>this is the worlds best tv that i've ever made to watch fifa world cup</p>
                                            <button className="btn-header">Read more</button>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
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
                                            <h2>Your most unhappy customers are <br/>your greatest source of learning.</h2>
                                            <p>this is the worlds best tv that i've ever made to watch fifa world cup</p>
                                            <button className="btn-header">Read more</button>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
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