import axios from 'axios';

const url = "https://react-node-post-app.herokuapp.com/posts";

const fetchPosts = () => {
    return axios.get(url)
}

const createPost = (newPost) => {
    return axios.post(url, newPost);
}

const updatePost = (id, updatedPost) => {
    return axios.patch(`${url}/${id}`, updatedPost)
}

const deletePost = (id) => {
    return axios.delete(`${url}/${id}`);
}

const likePost = (id) => {
    return axios.patch(`${url}/${id}/like`);
} 

export {fetchPosts, createPost, updatePost, deletePost, likePost};