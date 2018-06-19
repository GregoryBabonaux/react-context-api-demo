import React from 'react';
import Post from './Post';

import { array, number } from 'prop-types';

const Posts = ({ posts, currentUser }) => (
  <React.Fragment>
    {posts.map((post) => (
        <Post key={post.id} post={post} currentUser={currentUser} />
      ))
    }
  </React.Fragment>
);

Posts.propTypes = {
  posts: array,
  currentUser: number,
};

export default Posts;
