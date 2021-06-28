import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PaidBlog from '../PaidBlog/PaidBlog';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Blog></Blog>
            <PaidBlog></PaidBlog>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default Home;