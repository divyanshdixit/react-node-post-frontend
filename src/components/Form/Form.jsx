import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts';
import {useParams} from 'react-router-dom';

const Form = ({currentId, setCurrentId}) => {
    let initPostData = {
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    }

    const [postData, setPostData] = useState(initPostData)

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post){
            setPostData(post);
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }else{
            dispatch(createPost(postData))
        }
        clearInput();
    }

    const changeData = (e) => {
        const {name, value} = e.target;
        console.log(name,value);
        return setPostData( (prevData) => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    const submitUploadFile = ({base64}) => {
       return setPostData({
            ...postData,
            selectedFile:base64
        })
    }

    const clearInput = (e) => {
        setCurrentId(null);
        setPostData(initPostData)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <h1>{currentId ? 'Update' : 'Create' } Memory </h1>
        <div class="formcontainer">
        <div class="container">
            <label for="creator_name"><strong>Creator</strong></label>
            <input type="text" placeholder="Enter Name" name="creator" value={postData.creator} onChange={changeData} required/>
            <label for="title"><strong>Title</strong></label>
            <input type="text" placeholder="Enter Title" name="title" value={postData.title} onChange={changeData} required/>
            <label for="message"><strong>Message</strong></label>
            <input type="text" placeholder="Enter Message" name="message" value={postData.message} onChange={changeData} required/>
            <label for="tags"><strong>Tags</strong></label>
            <input type="text" placeholder="Enter Tags" name="tags" value={postData.tags} onChange={changeData} required/>
            <label for="image_file"><strong>Upload Image</strong></label>
            <FileBase
                type="file"
                multiple={false}
                onDone={submitUploadFile}
            />
        </div>
        <button type="submit"><strong>Submit</strong></button>
        <button type="button" onClick={clearInput}><strong>Clear</strong></button>
        </div>
        </form>
        </div>
    )
}

export default Form
