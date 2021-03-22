import React from 'react'
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts';

const Post = ({post, setCurrentId, likeCount, setLikeCount}) => {
    const dispatch = useDispatch();

    const CountLike = () => {
        dispatch(likePost(post._id));
    }

    const postDelete = () => {
        dispatch(deletePost(post._id));
    }

    const moreOption = () =>{
        setCurrentId(post._id)
    }

    return (
        <>
            <div class="card" style={{width: "18rem"}}>
            <div>
                <div className="d-flex justify-content-between">
                    <p>Memory:</p>
                    <button onClick={moreOption} className="btn btn-success" >
                        <MoreHorizIcon/>
                    </button>
                </div>
                <img src={post.selectedFile} class="card-img-top" width="150" alt="Selected Image"/>
                
            </div>
            
            <div class="card-body">
                <h5 class="card-title"> Title: {post.title}</h5>
                <p class="card-text"> Message: {post.message}</p>
                <p> Creator: <a href="#" class="btn btn-primary">{post.creator}</a></p>
                <p> Tags: <span class="badge bg-secondary">{post.tags}</span> </p>
                <p> Created : {moment(post.createdAt).fromNow()}</p>

                <div class="d-flex">
                    <button type="button" className="btn btn-link" onClick={CountLike}> {post.likeCount} Like </button>
                    <button type="button" className="btn btn-danger" onClick={postDelete}> Delete </button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Post
