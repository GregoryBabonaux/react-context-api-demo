import React from 'react';
import Topics from './Topics';

import { number } from 'prop-types';

const topics = [
  {
    id: 1,
    title: 'Vous le trouvai coman le dairnié tréleur de The Expanse ?',
    posts: [
      {
        id: 11,
        _user: {
          _id: 22,
          username: 'Jean-Kevin'
        },
        message: 'Il é draulement bien :)'
      },
     {
        id: 12,
        _user: {
          _id: 23,
          username: 'Maurice-Kevin'
        },
        message: 'J aime bien les effets spaciaux !'
      },
      {
        id: 13,
        _user: {
          _id: 24,
          username: 'Marie-Kevin'
        },
        message: 'Je préfère StarTrek.'
      },
    ]
  },
  {
    id: 2,
    title: 'Les jeux vidéos sont trop violents',
    posts: [
      {
        id: 113,
        _user: {
          _id: 22,
          username: 'Jean-Kevin'
        },
        message: 'Vous devriez essayer la boxe thai.'
      },
     {
        id: 123,
        _user: {
          _id: 23,
          username: 'Maurice-Kevin'
        },
        message: 'C est sur quelle console ton jeu de boxe thai ?'
      },
      {
        id: 133,
        _user: {
          _id: 24,
          username: 'Marie-Kevin'
        },
        message: 'On peut faire des finish him dans ton jeu ?'
      },
    ]
  }
];

class Board extends React.PureComponent {
  render() {
    const { props: { currentUser } } = this;

    return (
      <Topics topics={topics} currentUser={currentUser} />
    );
  }
}

Board.propTypes = {
  currentUser: number,
};

export default Board;
