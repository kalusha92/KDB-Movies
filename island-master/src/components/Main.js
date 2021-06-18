// import places from '../components/Header';


// export default function () {
//     const classes = useStyles();
//     const checked = useWindowPosition('header');
//     return (
//         <Header />
//         <PlaceToVisit />
//     );
//   }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import Header from './Header';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
        //some style here
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <Header />
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
}
