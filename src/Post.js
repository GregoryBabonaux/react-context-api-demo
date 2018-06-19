import React from 'react';
import { BoardContext } from './Board';

import { object } from 'prop-types';
import { If, Then, Else } from 'react-if';

const Post = ({ post }) => (
  <div>
    <p>
      <i>{post.message}</i>
    </p>
    <BoardContext.Consumer>{({ currentUser }) => 
      <If condition={post._user._id === currentUser}>
        <Then>
          <div>
            Bravo, votre message est de toute beautay <button>Supprimer</button> <button>Modifier</button>
          </div>
        </Then>
        <Else>
          <div>
            Un message offert avec beaucoup de sagacité par {post._user.username}
          </div>
        </Else>
      </If>
    }
    </BoardContext.Consumer>
    <hr />
  </div>
);

Post.propTypes = {
  post: object,
};

export default Post;