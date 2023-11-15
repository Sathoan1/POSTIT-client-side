import React, { useEffect, useState } from "react";
import cover from "../assets/images/cover.png";
import story2 from "../assets/images/story2.png";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { instance } from "../config/api";

const Story = () => {
  const tagClassName = (tags) => {
    if (tags === "nature") {
      return "tag-nature";
    } else if (tags === "technology") {
      return "tag-tech";
    } else if (tags === "sport") {
      return "tag-sport";
    }else if (tags === 'others'){
      return 'tag-others'
   }else {
      return "tag-lifestyle";
    }
  };
  const [tags, setTags]= useState('')
  const [image, setImage]= useState('')
  const [title, setTitle]= useState('')
  const [description, setDescription]= useState('')
  const [writtenBy, setWrittenBy]= useState('')
  const [createdAt, setCreatedAt]= useState('')
  const [isLoading, setIsLoading]= useState(true)
  

const {storyId}= useParams();
const token= localStorage.getItem('token')

const getStory = async()=>{
  try{
   const {data: {story}}= await instance.get(`/user/story/${storyId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  
   })
   setIsLoading(false)
  setTags(story.tags)
  setTitle(story.title)
  setImage(story.image)
  setDescription(story.description)
  setCreatedAt(story.createdAt)
  setWrittenBy(story.writtenBy.username)
  }catch(error){
    console.log(error);
  }
};
useEffect(()=>{
  getStory()
}, [storyId]);

if (isLoading){
  return <Loading/> 
}

  return (
    <div>
      <Layout>
        <article className="view-post container">
          <div className=" border-0">
            <div className="">
              <p className={` ${tagClassName(tags)} tag mt-3  text-capitalize`}>{tags}</p>
              <h3 className=" my-1 fw-bold">
                {title}
              </h3>
              <div className="d-flex my-3 underline">
                <img
                  src={image}
                  alt="image"
                  width="5%"
                  height="20%"
                  className=""
                />
                <p className="ms-2">
                  <span className="text-muted">By</span> {writtenBy}{" "}
                  <span className="text-muted">- {new Date(createdAt).toDateString()}</span>
                </p>
              </div>

              <img
                src={image}
                className="card-img-top cover-image"
                alt="image"
              />

              <p className="my-2 lh-lg">{description}</p>
             
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
};

export default Story;
