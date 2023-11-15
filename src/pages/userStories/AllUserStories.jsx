import { useEffect, useState } from "react";
import { instance } from "../../config/api";
import React from "react";
import stories from "../../mockData/story";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";

const AllUserStories = () => {
  const token= localStorage.getItem('token')
  const [stories, setStories]= useState([])
  const [isLoading, setIsLoading]= useState(true)


const fetchStories= async ()=> {
try{
 const {data}= await instance.get('/user/story',{
  headers: {
    Authorization: `Bearer ${token}`,
  },
 });

 setIsLoading(false)
 setStories(data.stories)
}catch(error){
  console.log(error);
}
}
useEffect(()=>{
  fetchStories()
}, [])


const handleDelete = async (id)=> {
try{
const {data}= await instance.delete(`/user/story/${id}`,{
  headers: {
    Authorization: `Bearer ${token}`
  }
})
if(data.success){
  window.location.reload()
}
}catch(error){
  console.log(error);
}
}

if (isLoading){
  return <Loading/>
}
if (stories.length< 1) {
  return <Empty/>
}

  return (
    <div>
      {stories.map((post) => {
        const { _id, title, description } = post;
        return (
          <div className="mainStory" key={_id}>
            <div className="main">
              <h1>{title}</h1>
              <h6>{description.substring(0, 100)}...</h6>
              <p className="p2">Published</p>
            </div>
            <div className="storyBtn">
              <Link to={`/edit/${_id}`}>
                <button className="storyEdit">Edit Post</button>
              </Link>
              <button className="storyDelete" onClick={()=> handleDelete(_id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllUserStories;
