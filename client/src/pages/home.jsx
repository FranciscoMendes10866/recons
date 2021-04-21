import { useState, useEffect } from 'react';
import { Box, Grid } from '@chakra-ui/react';

import { Map, Card } from '../components';
import { IPAPI, API } from '../utils/axios';

function Home() {
  const [position, setPosition] = useState({
    lat: 20,
    lng: -20,
  });
  const [show, setShow] = useState(false);
  const [markers, setMarkers] = useState([]);
  const getMarkers = async () => {
    await API.get('/')
      .then(({ data }) => {
        setMarkers(data);
      })
      .catch(err => console.log(err));
  };
  const getLocation = async () => {
    await IPAPI.get('/json')
      .then(({ data }) => {
        setPosition({ lat: data.latitude, lng: data.longitude });
        setShow(true);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getMarkers();
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
        <Map position={position} show={show} markers={markers} />
        {show ? <Card position={position} /> : null}
      </Grid>
    </Box>
  );
}

export default Home;
