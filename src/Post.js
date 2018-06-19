import React from 'react';

import { object, number } from 'prop-types';
import { If, Then, Else } from 'react-if';

const Post = ({ post, currentUser }) => (
  <div>
    <p>
      <i>{post.message}</i>
    </p>

    <If condition={post._user._id === currentUser}>
      <Then>
        <div>
          Bravo, votre message est de toute beautay <button>Supprimer</button> <button>Modifier</button>
        </div>
      </Then>
      <Else>
        Un message offert avec beaucoup de sagacité par post._user.username
      </Else>
    </If>

    <hr />
  </div>
);

Post.propTypes = {
  post: object,
  currentUser: number,
};

export default Post;