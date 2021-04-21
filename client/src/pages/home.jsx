import { useState, useEffect } from 'react';
import { Box, Grid } from '@chakra-ui/react';

import { Map, Card } from '../components';
import axios from '../utils/axios';

function Home() {
  const [position, setPosition] = useState({
    lat: 20,
    lng: -20,
  });
  const [show, setShow] = useState(false);
  const getLocation = async () => {
    await axios
      .get('/json')
      .then(({ data }) => {
        setPosition({ lat: data.latitude, lng: data.longitude });
        setShow(true);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition({ lat: coords.latitude, lng: coords.longitude });
        setShow(true);
      },
      err => {
        console.log(err);
        getLocation();
      }
    );
  }, []);
  return (
    <Box>
      <Grid minH="100vh" minW="100vw">
        <Map position={position} show={show} />
        {show ? <Card /> : null}
      </Grid>
    </Box>
  );
}

export default Home;
