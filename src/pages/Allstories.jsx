import React, { useState } from "react";
import Layout from "../components/Layout";
import StoryContent from "../components/StoryContent";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import stories from "../mockData/story";
import Story from "../components/Story";
import { instance } from "../config/api";
import Loading from "../components/Loading";

const Allstories = () => {
  const token= localStorage.getItem('token')
  const [stories, setStories]= useState([])
  const [isLoading, setIsLoading]= useState(true)


  const fetchStories= async ()=> {
    try{
     const {data}= await instance.get('/all/story',{
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
    
    


  return (
    <div>
      <Layout>
        <div>
          <StoryContent />
        </div>
        <div className="container story-div  mt-3">
          {isLoading ? <Loading/> :  stories.map((story) => {
            return <Story key={story._id} {...story} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Allstories;
