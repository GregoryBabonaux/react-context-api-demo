import React from 'react';
import Posts from './Posts';

import { array } from 'prop-types';


const Topics = ({ topics }) => (
  <React.Fragment>
    { topics.map((topic) => (
      <div key={topic.id}>
        <h1>Encore un débat intéressant sur JeVisDesHauts.com !</h1>
        <h2>{topic.title}</h2>
        <Posts posts={topic.posts} />
      </div>
      ))
    }
  </React.Fragment>
)

Topics.propTypes = {
  topics: array,
};

export default Topics;
