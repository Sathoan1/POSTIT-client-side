import React, { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import edit from "../assets/images/edit.svg";
import "../../styles/Create.css";

const Create = () => {
  const redirect= useNavigate()
const [image, setImage]=useState(null)
const [title, setTitle]=useState('')
const [tags, setTags]=useState('')
const [description, setDescription]=useState('')
const [publish, setPublish]=useState(false)

const token= localStorage.getItem('token')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPublish(true)
    const formData= new FormData()
    formData.append('title', title)
    formData.append('tags', tags)
    formData.append('image', image)
    formData.append('description', description)
  
    try{
      const res = await fetch('https://postitsathoan-server.onrender.com/api/user/story', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization : `Bearer ${token}`
        }
      })
      const data= await res.json()
      if (data.success){
  //  redirect to /my stories
  redirect('/mystories')
      }
      
   }catch(error){
     console.log(error);
   }
  };

  return (
    <div id="task3Top">
      <Layout>
        <div>
          <div className="task3">
            <div className="newTask">
              <h1>Create Story</h1>
            </div>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="titleTask">
                <img src={edit} alt="" />

                <input 
                required
                 type="file"
                 accept="image/*" 
                id="taskTitle" 
                placeholder="select image"
                onChange={(e)=> setImage(e.target.files[0])}
                />
              </div>

              <div className="titleTask">
                <img src={edit} alt="" />

                <input 
                type="text"
                 placeholder="Title" 
                 id="taskTitle"
                 required
                 value={title}
                 onChange={(e)=> setTitle(e.target.value)} />
              </div>

              <div className="tagS">
                <img src={edit} alt="" />

                <select id="tags"
                required
                value={tags}
                onChange={(e)=> setTags(e.target.value)}>
                  <option value="">Select a category</option>
                  <option value="nature">Nature</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="sport">Sport</option>
                  <option value="technology">Technology</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="descripTion">
                <img src={edit} alt="" />
                <textarea
                 required 
                 placeholder="Description"
                  id="describe" 
                  value={description}
                  onChange={(e)=> setDescription(e.target.value)}
                  />
              </div>

              <div className="Btndone">
                <button type="submit" className="btnDone">
                  {publish ? 'Publishing your story...' : 'Publish story'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Create;