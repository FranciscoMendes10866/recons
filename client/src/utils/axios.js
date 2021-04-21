import { create } from 'axios';

const instance = create({
  baseURL: 'https://ipapi.co',
  timeout: 6000,
});

export default instance;
