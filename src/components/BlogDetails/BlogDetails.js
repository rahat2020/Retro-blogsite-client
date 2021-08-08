import React, { useContext, useEffect, useState } from 'react';
import './BlogDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
// import { UserContext } from '../../App';

const BlogDetails = () => {
    const [blog,setBlog ] = useState([])
    console.log(blog)
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
    const {_id} = useParams()
    console.log(_id)

    useEffect(() => {
        const url = `http://localhost:5000/readBlog`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setBlog(data))
    }, [setBlog])
    const blogDetails = blog.find(item => item?._id === _id)
    console.log(blogDetails)
    return (
        <div>
            <Navbar />
            <section class="blog-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <button class="btn btn-custom active blog-button">Popular</button>
                            <button class="btn btn-custom-reverse blog-button">Sports</button>
                            <button class="btn btn-custom-reverse blog-button">Olympic</button>
                            <button class="btn btn-custom-reverse blog-button">Business</button>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <form>
                                <div class="search height d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faSearch} />
                                    <input type="search" class="form-control search-box" placeholder="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="container blog-main">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="blog-block-container">
                                <div class="blog-block">
                                    <div class="row blog-block-row">
                                        <div class="col-md-5">
                                            <img src={blogDetails?.imgURL} alt="" class="img img-responsive blog-block-image" />
                                        </div>
                                        <div class="col-md-7">
                                            <p class="blog-title">{blogDetails?.name}</p>
                                            <p class="blog-sub-title">David Smith</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="blog-content">
                                          {blogDetails?.content}
                                        </p>
                                        <p class="text-secondary">
                                            July 21, 2021 &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; <Link href="#">100 Comments</Link>
                                        </p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <FontAwesomeIcon icon={faThumbsUp} /> 200
                                    </div>
                                    <div class="col-md-6">

                                        <div class="footer-social-info">
                                            Share:
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link href="#" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <FontAwesomeIcon icon={faFacebookSquare} />
                                            </Link>

                                            <Link to="" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </Link>
                                            <Link to="" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </Link>

                                            <Link to="" data-toggle="tooltip" data-placement="top" title="Whatsapp">
                                                <FontAwesomeIcon icon={faWhatsapp} />
                                            </Link>

                                            <Link to="" data-toggle="tooltip" data-placement="top" title="Linkedin">
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/* side new */}
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-3 popular-blog">
                            <h4 class="text-center popular-blog-section-title">Popular Blogs</h4>
                            <div class="popular-blog-section">
                                <div class="blog-preview">
                                    <div>
                                        <img src="https://dummyimage.com/97x97/000/ffffff.png" alt="" class="img img-responsive" />
                                    </div>
                                    <div class="blog-preview-content">
                                        There are many variations of
                                    </div>
                                </div>

                                <div class="blog-preview">
                                    <div>
                                        <img src="https://dummyimage.com/97x97/000/ffffff.png" alt="" class="img img-responsive" />
                                    </div>
                                    <div class="blog-preview-content">
                                        There are many variations of
                                    </div>
                                </div>

                                <div class="blog-preview">
                                    <div>
                                        <img src="https://dummyimage.com/97x97/000/ffffff.png" alt="" class="img img-responsive" />
                                    </div>
                                    <div class="blog-preview-content">
                                        There are many variations of
                                    </div>
                                </div>

                                <div class="blog-preview">
                                    <div>
                                        <img src="https://dummyimage.com/97x97/000/ffffff.png" alt="" class="img img-responsive" />
                                    </div>
                                    <div class="blog-preview-content">
                                        There are many variations of
                                    </div>
                                </div>

                                <div class="blog-preview">
                                    <div>
                                        <img src="https://dummyimage.com/97x97/000/ffffff.png" alt="" class="img img-responsive" />
                                    </div>
                                    <div class="blog-preview-content">
                                        There are many variations of
                                    </div>
                                </div>

                                <div class="blog-preview">
                                    <div>
                                        <img src="https://dummyimage.com/97x97/000/ffffff.png" alt="" class="img img-responsive" />
                                    </div>
                                    <div class="blog-preview-content">
                                        There are many variations of
                                    </div>
                                </div>

                                <div class="blog-preview">
                                    <div>
                                        <img src="https://dummyimage.com/97x97/000/ffffff.png" alt="" class="img img-responsive" />
                                    </div>
                                    <div class="blog-preview-content">
                                        There are many variations of
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;