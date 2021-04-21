import { create } from 'axios';

export const IPAPI = create({
  baseURL: 'https://ipapi.co',
  timeout: 6000,
});

export const API = create({
  baseURL: 'http://localhost:9000',
  timeout: 6000,
});
