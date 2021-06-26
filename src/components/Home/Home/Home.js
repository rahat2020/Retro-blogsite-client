import React from 'react';
import Blog from '../Blog/Blog';
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
        </div>
    );
};

export default Home;