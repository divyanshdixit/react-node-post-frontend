import React from 'react'
import * as api from '../api';
import {FETCH_ALL, FETCH_SUCCESS, UPDATE, UPDATE_LIKE, DELETE} from '../constants/actionTypes';

// crate action creator 
// action creator is function that returns an action which is an object
// with the use of redux thunk we can use async(dispatch) function that dispatch(action)
const getPosts = () => async(dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        const action = {type:'FETCH_ALL', payload:data}
        dispatch(action);
    }catch(error){
        console.log(error.message)
    }
}

const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        const action = {type:'FETCH_SUCCESS', payload:data}
        dispatch(action);
    }catch(error){
        console.log(error.message)
    }
}

const updatePost = (id, post) => async (dispatch) => {
    try{
        const {data} = await api.updatePost(id, post);
        const action = {type:'UPDATE', payload:data}
        dispatch(action);
    }catch(error){
        console.log(error.message)
    }
}

const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);
        const action = {type:'DELETE', payload:id};
        dispatch(action);
    }catch(error){
        console.log(error.message);
    }
}

const likePost = (id) => async (dispatch) => {
    try{
       const {data} = await api.likePost(id);
       const action = {type:'UPDATE_LIKE', payload:data};
       dispatch(action);
    }catch(error){
        console.log(error.message);
    }
}

export {getPosts, createPost, updatePost, deletePost, likePost};
