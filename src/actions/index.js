import axios from 'axios';

export const FETH_POSTS = 'FETCH_POSTS';
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=hgjadhghdahgdhgggg"
export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETH_POSTS,
    payload: request
  };
}
export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: CREATE_POST,
    payload: request
  }
}
