import axios from 'axios';

const Ip = '192.168.1.68';
const Port = '5000';

const deployUrl = 'https://quiet-forest-80163.herokuapp.com/';

export const Api = axios.create({
  baseURL: `http://${Ip}:${Port}/api/`,
  // baseURL: `${deployUrl}api/`,
  headers: {'Content-type': 'application/json'},
});
