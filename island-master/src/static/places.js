import {IconButton} from '@material-ui/core';

const places = [
  {
    title: "We've missed you",
    description:
      "If you already have account, sign in and get reviews on the latest movies out. Give review to the last movie you saw.",
    imageUrl: process.env.PUBLIC_URL + '/assets/bg5.jpg',
    time: 1500,
    text: "Sign In",
    url: "/signIn"
  },
  {
    title: 'Join our Community',
    description:
      "Join our Movie-Loving Community. Create an account and checkout the reviews of devout fans and movie-lovers. You'll be able to give reviews yourself",
    imageUrl: process.env.PUBLIC_URL + '/assets/bg4.jpg',
    time: 1500,
    text: "Sign Up",
    url: "/signUp"
  },
];

export default places;
