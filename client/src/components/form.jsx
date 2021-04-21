import { FormControl, FormLabel, Input, Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    name: '',
    message: '',
  });
  const handleOnChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleOnClick = e => {
    e.preventDefault();
    console.log(state);
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
