import React,{ useContext } from 'react'
import Logo from'../../../assets/logo.png'
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import { Dropdown, Space } from 'antd';
import './Navbar.scss'


export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const Logout = (e) => {
    logout()
    navigate("/")
  }

  const items = [

  {
    label:(
        <span onClick={Logout}> Logout</span>
    ),
    key: '0',
  },
];

  const Click = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="navbar">
    <div className="container">
      <div className="logo">
        <Link to="/provider/">
        <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/provider/">
          <h6>Profile</h6>
        </Link>
        <Link className="link" to="/provider/service">
          <h6>Services</h6>
        </Link>
        <Link className="link" to="/provider/order">
          <h6>Orders</h6>
        </Link>
        <Link className="link" to="/provider/review">
          <h6>Reviews</h6>
        </Link>
        {/* <div className='search'>
          <span onClick={Search}><SearchOutlined/></span>
        </div> */}
        {currentUser ? (
            <div className="user">
            <img
              src={currentUser.img_url}
              alt=""
            />
            <Dropdown
              menu={{
                items,
              }}
            >
            <a onClick={Click}>
              <Space>
                <span>{currentUser.username}</span>
              </Space>
            </a>
          </Dropdown>
          </div>
          ) : (
            <span>     </span>
          )}
          {currentUser ? (
            <span > </span>
          ) : (
            <Link className="link" to="/">
              Login
            </Link>
          )}
        {/* <span className="write">
          <Link className="link" to="/add">
            Write
          </Link>
        </span> */}
      </div>
    </div>
  </div>
  )
}
