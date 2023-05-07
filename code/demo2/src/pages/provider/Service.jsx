import React from 'react'
import './services.scss'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {Table } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Service() {
  const { currentUser } = useContext(AuthContext);
  const [service, setService] = useState([{
    id: "",
    service_name: " ",
    service_type: " ",
    price: " ",
    service_description: " ",
    status: " "
}])
  const navigate = useNavigate()
  const addService = () =>{
    navigate("/provider/add")
  }

  let ID = currentUser.id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/service/provider/${ID}`);
        setService([{
          'id': res.data.id,
          'service_name': res.data.service_name,
          'service_type': res.data.service_type,
          'price': res.data.price,
          'service_description': res.data.service_description,
          'status' : res.data.is_effective 
        }])
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [ID]);

  // console.log(article.list);
  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'service_name',
    },
    {
      title: 'Service Type',
      dataIndex: 'service_type',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'service_description',
    },
    {
      title: 'State',
      dataIndex: 'status',
    },
  ];

  const pageChange = (page) => {
    // 拿到当前页参数 修改params 引起接口更新
    setParams({
      ...params,
      page
    })
}

const [params, setParams] = useState({
  page: 1,
  per_page: 10
})

  return (
    <div className="history">
        <div className='addService'>
        {currentUser.is_effective ? (
              <button onClick={addService}>Add Service</button>
          ) : (
            <span> </span>
          )}
        </div>
      <Table rowKey={service.id} columns={columns}  dataSource={service}   
      pagination={{
        position: ['bottomCenter'],
        current: params.page,
        pageSize: params.per_page,
        onChange: pageChange
      }}/>
    </div>
  )
}
