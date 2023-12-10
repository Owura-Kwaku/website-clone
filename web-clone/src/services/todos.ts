import axios from 'axios';

const getResource = (postId: number) => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
const getAllResources = (queryParams: string[]) => axios.get(`https://jsonplaceholder.typicode.com/posts?${queryParams.join('&')}`);

export { getResource, getAllResources };
