import { Card, Input, Radio } from 'antd'
import React from 'react'
import { useState } from 'react';
import Question from "../assets/question.jpg"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [value, setValue] = useState(1);
  const [service, setService] = useState([]);
  const [provider, setProvider] = useState([]);
  const [inputs, setInputs] = useState({});

  const onInputs = (e) => {
    setInputs(e.target.value);
  };

  const Search = async () =>{
    setInputs(inputs);
    if(value === 1){
      const res = await axios.get(`/service/searchp/${inputs}`);
      setProvider(res.data);
      setService('')
      console.log(service.length);
      console.log(provider.length);
    }
    if(value === 2){
      const res = await axios.get(`/service/searchs/${inputs}`);
      setService(res.data);
      setProvider('')
      console.log(service.length);
      console.log(provider.length);
    }
  }


  const onChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <div className='Search'>
      <Card className= "card" title="Search what you want" >
        <div className='input'>
          <Input placeholder="Please Input" name="input" onChange={onInputs} style={{ alignItems:"center", marginLeft:"30%"}}/>
          <span  onClick={Search}> <img src={Question} alt=''></img></span>
        </div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Provider Name</Radio>
          <Radio value={2}>Service Name</Radio>
          <Radio value={3}>City Name</Radio>
          {/* <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio> */}
        </Radio.Group>
      </Card>
      <br/>
      {provider.length !== 0 && (
        <div className='Results'>
          
          {provider.map((provider) => (
            <Card className='r-card'>
            <div className="service" key={provider.id}>
              <div className="img">
                <img src={provider.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/customer/service/${provider.id}`}>
                  <h1>{provider.service}</h1>
                </Link>
                <div className="avatar">
                  <img style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                  }}
                  src={provider.u_img} alt="" />
                  <span>
                    {provider.provider}</span>
                </div>
                  <h6>{provider.type}</h6>
                  <h6>{provider.create_time}</h6>
                <p>{provider.description}</p>
                  <button>Read More</button>
              </div>
            </div>
            </Card>))}
      </div>
      )}
      {service.length !== 0 && (
        <div className='Results'>
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
                  <button>Read More</button>
              </div>
            </div>
            </Card>
          ))}
      </div>
      )}
    </div>
  )
}
