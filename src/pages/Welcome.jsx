import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import "../../styles/Welcome.css";
import scrabble from "../assets/images/srabblepics.svg";
import { Link } from "react-router-dom";
import { instance } from "../config/api";

const Welcome = () => {
  const [user, setUser]= useState('');

  const token= localStorage.getItem('token')
  const fetchUser= async()=>{
    const {data}= await instance.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    setUser(data.username);
  }
  useEffect(()=>{
    fetchUser()
  }, [])

  return (
    <div>
      <Layout>
        <div>
          <hr className="line" />
          <div className="Welcome">
            <div className="welcome1">
              <h1>Welcome {user},</h1>
              <p>
                Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
                massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
                aliquam id ut.
              </p>
              <div className="btn_S">
                <Link to="/mystories">
                  <button className="btnStory">My Stories</button>
                </Link>
                <Link to="/allstories">
                  <button className="btnFeed">Go to Feed</button>
                </Link>
              </div>
            </div>
            <div>
              <img src={scrabble} alt="" className="scrabble" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Welcome;
