import React from 'react'
import './login.scss'

import { Button, Form, Input } from 'antd';
import {$login} from '../../api/adminAPI'

export default function Login() {
    const onFinish = (values) => {
        $login(values)
      };
    const [form] = Form.useForm();
  return (
    <div className='login'>
        <div className='content'>
            <h2>Find A Service</h2>
            <Form
                name="basic"
                form={form}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
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
                <Input />
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
                <Input.Password />
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type="primary" htmlType="submit" style={{marginLeft: '25%'}}>
                    Login
                </Button>

                </Form.Item>
            </Form>
        </div>
    </div>
  )
}
