import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Aug 26, 2022" text="Binary Search" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 20, 2022" text="AI Models" />
        <Article imgUrl={blog03} date="Nov 10, 2022" text="Connecting Dots" />
        <Article imgUrl={blog04} date="Feb 15, 2023" text="Computer language by AI" />
        <Article imgUrl={blog05} date="Mar 26, 2023" text="AI: Is it fuitful for modern era" />
      </div>
    </div>
  </div>
);

export default Blog;