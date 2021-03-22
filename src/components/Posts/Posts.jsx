import React from 'react'
import Post from './Post/Post';

import {useSelector} from 'react-redux';
import {CircularProgress} from '@material-ui/core';

const Posts = ({setCurrentId, likeCount, setLikeCount}) => {
    const posts = useSelector((state) => state.posts);
    return (
        
        !posts.length ? <CircularProgress/> : (
            <div class="row">
                {
                    posts.map( (post) => {
                   return (
                        <div className="col-md-4">
                            <Post key={post._id} likeCount={likeCount} setLikeCount={setLikeCount} post={post} setCurrentId={setCurrentId}/>
                        </div>
                        )
                    })
                }
            </div>
        )
        
    )
}

export default Posts
