import React from 'react'
import './personal.scss'
import Logo from '../../assets/logo.png'
import Login from '../../assets/logo.png'
import {FacebookOutlined,HomeOutlined, MailOutlined, MoreOutlined, } from '@ant-design/icons'
import {InstagramOutlined,TwitterOutlined, LinkedinOutlined,} from '@ant-design/icons'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function Personal() {

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="personal">
        <div className="images">
          <img src={Logo} alt="" className="cover" />
          <img src={currentUser.img_url} alt="" className="profilePic" />
        </div>
        <div className="profileContainer">
          <div className="uInfo">
            <div className="left">
              <a href="http://facebook.com">
                <FacebookOutlined style={{fontSize:"X-Large", color:"black"}} />
              </a>
              <a href="http://facebook.com">
                  <InstagramOutlined style={{fontSize:"X-Large", color:"black"}} />
                </a>
                <a href="http://facebook.com">
                  <TwitterOutlined style={{fontSize:"X-Large", color:"black"}} />
                </a>
                <a href="http://facebook.com">
                  <LinkedinOutlined style={{fontSize:"X-Large", color:"black"}} />
                </a>
            </div>
            <div className="center">
              <span>{currentUser.username}</span>
              <div className="info">
                <div className="item">
                <HomeOutlined style={{fontSize:"Large", color:"#002"}}/>
                  <span>{currentUser.address}</span>
                </div>
              </div>
            </div>
            <div className="right">
            <MailOutlined style={{fontSize:"X-Large", color:"#002"}}/>
            <MoreOutlined style={{fontSize:"X-Large", color:"#002"}}/>
            </div>
          </div>
        </div>
  </div>
  )
}
