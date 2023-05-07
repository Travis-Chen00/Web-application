import React from 'react'
import { useState } from "react";
import './Register.scss'
// import Link from 'antd/es/typography/Link';
import { Radio, Button} from 'antd'
import logo from '../assets/login.png'
import axios from 'axios';
import { Input } from 'antd';

import {useNavigate } from "react-router-dom";


export default function Register() {
    const [value, setValue] = useState(1);
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        check: "",
        address: ""
      });

    const [inputP, setInputP] = useState({
        username: "",
        email: "",
        password: "",
        address: "",
        description: "",
      });
      const [err, setError] = useState(null);

    const onChange = (e) => {
      setValue(e.target.value);
      setComponentDisabled(true)
      if(e.target.value == 2){
        setComponentDisabled(false)
      }
    };
    
    const { TextArea } = Input;

    const onLogin = (e) => {
      navigate("/");
    };
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setInputP((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(inputs.password === inputs.check){
          if(value === 1){try {
              await axios.post("http://localhost:8800/api/auth/register", inputs);
              alert("Register Successful! Welcome!")
              navigate("/");
            } catch (err) {
              setError(err.response.data);
          }}
          if(value === 2){
            await axios.post("http://localhost:8800/api/auth/register/provider", inputP);
            alert("Register Successful! Welcome!")
            navigate("/");
          }

        }else{
          alert("Inconsistent password!")
        }
      };

    return (
    <div className="register">
        <form>
        <img className="register-logo" src={logo} alt="" />
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="check password"
          name="check"
          onChange={handleChange}
        />
        <input
          required
          type="address"
          placeholder="Address"
          name="address"
          onChange={handleChange}
        />
        <TextArea disabled={componentDisabled} placeholder="Description" rows={4} />
        <div className='type'>
        <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>User</Radio>
            <Radio value={2}>Service Provider</Radio>
        </Radio.Group>
        </div>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account?
          <Button className='login_button' href="#text-buttons" onClick={onLogin}>Login</Button>
        </span>
        </form>
    </div>
  )
}