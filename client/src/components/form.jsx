import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import { API } from '../utils/axios';

const Form = ({ position }) => {
  const toast = useToast();
  const [state, setState] = useState({
    name: '',
    message: '',
  });
  const handleOnChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleOnClick = async e => {
    e.preventDefault();
    await API.post('/', {
      ...state,
      latitude: position.lat,
      longitude: position.lng,
    })
      .then(({ data }) => {
        if (data) {
          toast({
            title: 'Your location was submited!',
            description: "We've created a marker for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <Flex direction="column">
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleOnChange}
          value={state.name}
        />
      </FormControl>
      <FormControl id="message" mt={4}>
        <FormLabel>Message</FormLabel>
        <Input
          type="text"
          placeholder="Enter a message"
          name="message"
          onChange={handleOnChange}
          value={state.message}
        />
      </FormControl>
      <Button colorScheme="teal" mt={6} onClick={handleOnClick}>
        Submit
      </Button>
    </Flex>
  );
};

export default Form;
