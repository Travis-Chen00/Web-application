import React, { useContext } from 'react'
import './Login.scss'
import { Button, Checkbox, Form, Input} from 'antd';
import { Card } from 'antd'
import logo from '../assets/login.png'
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
    
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

      const onFinish = async (values) => {
        if(values.remember === true){
          try {
            const res = await login(values)
            if(res === 1){
                navigate("/customer/");} //Customer
            if(res === 2){
                navigate("/admin/");} //Admin
            if(res === 3){
                navigate("/provider/");} //Service Provider
          } catch (err) {
            alert(err.response[0].data)
          }
        }else{
            alert("Please agree to the privacy!")
        }
      };


  return (
    <div className="login">
        <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        <Form
            name="basic"
            className="Form"
            labelCol={{
            span: 7,
            }}
            wrapperCol={{
            span: 15,
            }}
            style={{
            maxWidth: 800,
            alignItems: 'center',
            }}
            initialValues={{
            remember: false,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
        >
            <Input placeholder='Please input your username' />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password placeholder='Please input your password' />
        </Form.Item>

        <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        style={{
            color: '#000',
        }}
        >
            <Checkbox>Agree to the privacy</Checkbox>
        </Form.Item>

        <Form.Item
        wrapperCol={{
            offset: 2,
            span: 16,
        }}
        >
        <Button type="primary" htmlType="submit" style={{marginLeft: "35%"}}>
            Login
        </Button>
        <Link to="/register" style={{marginLeft: "30px"}}>Register</Link>
    </Form.Item>
  </Form>
        </Card>
    </div>
  )
}

export default Login