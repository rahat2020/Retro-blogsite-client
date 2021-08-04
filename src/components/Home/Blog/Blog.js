import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import userone from '../../../img/userone.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Blog = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        const url = `https://mysterious-ridge-73120.herokuapp.com/showPost`
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000});
    })
    return (
        <section className="container section-container mt-4">
            <div data-aos="fade-up-right" className="row w-100 shadow-sm">
                {
                    post.map((singlePost) => (
                        <div className="col-md-4">
                            <div className="card-container w-100 mt-4">
                                <div class="card w-100 card-style">
                                    <img class="card-img-top card-img" src={singlePost.imgURL} alt="" />
                                    <div class="card-body">
                                        <h6 class="card-title">Business, travel <span className="date">-July 2, 2020</span> </h6>
                                        <h4 className="card-description">{singlePost.name}</h4>
                                        <p class="card-text card-TextContent mt-3">{singlePost.content}</p>
                                        <div className="card-author">
                                            <img className="author-img" src={userone} alt="" />
                                            <p className="author-name">Jhons snow <br /> <span className="author-passion">CEO and Founder</span> </p>
                                        </div>
                                        <Link to="" > <button className="btn-readmore">Read More</button> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Blog;