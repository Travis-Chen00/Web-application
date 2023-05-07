import React from 'react'
import './home.scss'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Card } from 'antd';

export default function Home() {

  const [service, setService] = useState([]);

  const type = useLocation().search
  // const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/service${type}`);
        setService(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [type]);

  // const Book = (id) =>{
  //   // navigate(`/customer/service/pay/${service.id}`)
  //   console.log(id);
  // }

  return (
    <div className='home'>
      <div className='services'>
        {service.map((service) => (
          <Card className='r-card'>
            <div className="service" key={service.id}>
              <div className="img">
                <img src={service.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/customer/service/${service.id}`}>
                  <h1>{service.service_name}</h1>
                </Link>
                <div className="avatar">
                  <img style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                  }}
                  src={service.u_img} alt="" />
                  <span>
                    {service.service_provider_name}</span>
                </div>
                  <h6>{service.create_time}</h6>
                <p>{service.service_description}</p>
                  {/* <button onClick={Book({service.id})}>Book Now</button> */}
                  <Link className="link" to={`/customer/service/apply/${service.service_provider}`}>
                  <h5>Book Now</h5>
                </Link>
              </div>
            </div>
            </Card>
          ))}
      </div>
    </div>
  )
}
