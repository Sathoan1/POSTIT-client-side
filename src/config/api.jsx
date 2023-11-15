import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://postitsathoan-server.onrender.com/api' 
})