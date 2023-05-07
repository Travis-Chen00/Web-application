import React,{ useContext } from 'react'
import Logo from'../assets/logo.png'
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import {SearchOutlined} from "@ant-design/icons"
import { Dropdown, Space } from 'antd';



export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const Logout = (e) => {
    logout()
    navigate("/")
  }

  const Search = (e) =>{
    navigate("/search")
  }

  const items = [
  {
    label: (
      <Link className="link" to="/customer/personal">
      <span>Profile</span>
    </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link className="link" to="/customer/order">
      <span>Order</span>
    </Link>
    ),
    key: '1',
  },
  {
    label:(
        <span onClick={Logout}> Logout</span>
    ),
    key: '2',
  },
];

  const Click = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="navbar">
    <div className="container">
      <div className="logo">
        <Link to="/customer/">
        <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/customer/?service_type=clean">
          <h6>Cleaning</h6>
        </Link>
        <Link className="link" to="/customer/?service_type=baby">
          <h6>Babysetting</h6>
        </Link>
        <Link className="link" to="/customer/?service_type=pest">
          <h6>Pest Control</h6>
        </Link>
        <Link className="link" to="/customer/?service_type=plumbing">
          <h6>Plumbing</h6>
        </Link>
        <Link className="link" to="/customer/?service_type=repair">
          <h6>Electrical Repairs</h6>
        </Link>
        <Link className="link" to="/customer/?service_type=beauty">
          <h6>Beauty</h6>
        </Link>
        <Link style={{marginRight:"10px"}} className="link" to="/customer/?service_type=others">
          <h6>Others</h6>
        </Link>
        <div className='search'>
          <span onClick={Search}><SearchOutlined/></span>
        </div>
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
