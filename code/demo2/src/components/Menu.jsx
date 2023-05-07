import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import axios from "axios";


function Menu({id, type}) {

  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/service/?service_type=${type}`);
        setService(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [type]);

  return (
    <div className='menu'>
    <h1>Other provider you may like</h1>
      {service.map((service) => (
        <div className="service" key={service.id}>
          <img src={service.img} alt="" />
          <h2>{service.service_name}</h2>
          <h3>{service.service_description}</h3>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
