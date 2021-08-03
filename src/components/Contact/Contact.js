import React from 'react';
import './Contact.css';
import Navbar from '../Home/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faMapMarkedAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faYoutube, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
const Contact = () => {

    return (
        <section className="" id="contact">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <Link class="navbar-brand logo" to="/home">Retro<span className="logo-title">Blog</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                        <div class="navbar-nav text-decoration-none ">
                            <Link class="nav-link text-white fw-bold nav-hover" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link text-white fw-bold nav-hover" to="/login">Features</Link>
                            <Link class="nav-link text-white fw-bold nav-hover" to="/dashboard">Dashboard</Link>
                            <Link class="nav-link text-white fw-bold nav-hover" to="/blog" tabindex="-1" >Blog</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="contact">
                <h1 class="section-header">Contact</h1>

                <div class="contact-wrapper">
                    {/* message form */}
                    <form id="contact-form" class="form-horizontal" role="form">

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <textarea class="form-control" rows="8" placeholder="MESSAGE" name="message" required></textarea>
                            </div>

                        </div>

                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div class="alt-send-button col-sm-12">
                                <FontAwesomeIcon icon={faPaperPlane} /> <span class="send-text">SEND</span>
                            </div>
                        </button>
                    </form>

                    {/* social icon and adderess */}
                    <div class="direct-contact-container">

                        <ul class="contact-list">
                            <li class="list-item"> <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} /> <span class="contact-text place">Dhaka, Bangladesh</span></li>

                            <li class="list-item"><FontAwesomeIcon className="icon" icon={faPhone} /> <span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>
                            <li class="list-item"><FontAwesomeIcon className="icon" icon={faEnvelope} /> <span class="contact-text gmail"><a href="mailto:#" title="Send me an email">RetroBlog@gmail.com</a></span></li>

                        </ul>

                        <hr />
                        <ul class="social-media-list">
                            <li><Link to="https://github.com/rahat2020" target="_blank" class="contact-icon">
                                <FontAwesomeIcon icon={faGithub} /></Link>
                            </li>
                            <li><Link to="https://www.facebook.com/KaziRahat1020/" target="_blank" class="contact-icon">
                                <FontAwesomeIcon icon={faFacebook} /></Link>
                            </li>
                            <li><Link to="https://www.youtube.com/channel/UCHYS--t1fccbXYkgt_a8_OA" target="_blank" class="contact-icon">
                                <FontAwesomeIcon icon={faYoutube} /></Link>
                            </li>
                            <li><Link to="" target="_blank" class="contact-icon">
                                <FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                        </ul>
                        <hr className="mb-3" />

                        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED RetroBlog</div>

                    </div>

                </div>

            </div>


        </section>
    );
};

export default Contact;