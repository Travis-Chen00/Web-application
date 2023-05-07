import React from 'react'
import './single.scss'
import Edit from "../../assets/edit.png";
import Delete from "../../assets/delete.png";
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../../components/Menu';
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
// import moment from 'moment/moment';
import Review from './Review';


export default function Single() {
  const [service, setService] = useState({});
  const [reviews, setReview] = useState({});

  const loc = useLocation()
  const { currentUser } = useContext(AuthContext);
  const serviceId = loc.pathname.split("/")[3] //get ID

  const navigate = useNavigate()

  const handlePay = () =>{
    navigate(`/customer/service/apply/${service.service_provider}`)
  }
  // $%7BserviceId%7D

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/service/${serviceId}`);
        setService(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [serviceId]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/review/${serviceId}`);
        setReview(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [serviceId]);

  console.log(reviews);

  // const handleDelete = async ()=>{
  //   try {
  //     await axios.delete(`/service/${serviceId}`);
  //     //navigate("/")
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div className='single'>
        <div className='content'>
          <img src={service.img} alt=''></img>
          <div className='provider'>
            <img src={service.u_img} alt=''></img>
            <div className='info' style={{marginLeft:'5px'}}>
              <span>{service.provider}</span>
              <p>{service.create_time}</p>
              {/* moment(service.create_time).fromNow() */}
            </div>
            {/* {currentUser.username === service.service_name && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
              )} */}
          </div>
          <div className='desc'>
              <h1>{service.service_name}</h1>
              <p>{service.service_description}</p>
          </div>
          <button onClick={handlePay}> Book Now</button>
          <div className='Review'>
            <Review id={service.id}/>
          </div>
      </div>
      <Menu id={service.id} type={service.service_type}/>
    </div>
  )
}
