import React, {useState, useContext} from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './pay.scss'
import { AuthContext } from "../../context/authContext";
import {Button, Form, Input, DatePicker } from 'antd';
import axios from 'axios';
import {useNavigate, useLocation} from "react-router-dom";
import moment from 'moment/moment';

export default function Pay() {
  const { currentUser } = useContext(AuthContext);
  const { RangePicker } = DatePicker;
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  const [value, setValue] = useState('');

  const loc = useLocation()
  const serviceId = loc.pathname.split("/")[4] //get ID

  const handleRequest = async (values) =>{
    let imgUrl = "";
    if (image) imgUrl = await uploadImage();

    try{
      // const body = {
      //   id : currentUser.id,
      //   requests: values.request_name,
      //   requirements: values.requirements,
      //   status: "0",
      //   address: values.address,
      //   time: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      //   service_id: serviceId,
      //   img: imgUrl
      // }
      await axios.post(`http://localhost:8800/api/request/`, {
        user_id : currentUser.id,
        request_name: values.request_name,
        requirements: values.requirements,
        address: values.address,
        time: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        service_id: serviceId,
        img: imgUrl
      });
      navigate("/customer/")
    }catch (err){
      console.log(err);
    }

  }

  const uploadImage = async () =>{
    try{
      const formData = new FormData()
      formData.append("image", image)
      const res = await axios.post('http://localhost:8800/api/upload', formData)
      return res.data
    }catch (err){
      console.log(err);
    }
  }

  return (
    <div className="add">
    <div className="content">
    <Form
      name="control-hooks"
      onFinish={handleRequest}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="request_name"
        label="Request_name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="requirements"
        label="Requirements"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="DatePicker" name="time"
              rules={[
                {
                  required: true,
                },
              ]}>
          <DatePicker />
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" style={{marginLeft: "35%"}}>
            Upload
        </Button>
        </Form.Item>
      </Form>
    </div>
    <div className='menu'>
      <div className='item'>
        <h1>Requirements</h1>
        <span>
          <b>Status: </b> Wait to be valid
        </span>
        <input style={{display:"none"}} type='file' id='file' name='' onChange={(e) => setImage(e.target.files[0])}></input>
        <label className='file' htmlFor='file'>Upload Image</label>
        <div className='buttons'>
        <button onClick={uploadImage}>Upload Image</button>
        {/* <button onClick={handleRequest}>Apply Request</button> */}
      </div>
      </div>
      <div className='item'>
        <h1>Category</h1>
        <div className='Category'>
          <input type='radio' name='category' value='clean' id='clean'/>
          <label htmlFor='clean'>Cleaning</label>
        </div>
        <div className='Category'>
          <input type='radio' name='category' value='babyset' id='babyset'/>
          <label htmlFor='clean'>Babysetting</label>
        </div>
        <div className='Category'>
          <input type='radio' name='category' value='pest' id='pest'/>
          <label htmlFor='clean'>Pest Control</label>
        </div>
        <div className='Category'>
          <input type='radio' name='category' value='plumbing' id='plumbing'/>
          <label htmlFor='clean'>Plumbing</label>
        </div>
        <div className='Category'>
          <input type='radio' name='category' value='repair' id='repair'/>
          <label htmlFor='clean'>Electrical Repairs</label>
        </div>
        <div className='Category'>
          <input type='radio' name='category' value='beauty' id='beauty'/>
          <label htmlFor='clean'>Beauty</label>
        </div>
        <div className='Category'>
          <input type='radio' name='category' value='others' id='others'/>
          <label htmlFor='clean'>Others</label>
        </div>
      </div>
    </div>
  </div>
  )
}
