import React from 'react'
import './services.scss'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {Table, Space, Button } from 'antd';

export default function Service() {
  const { currentUser } = useContext(AuthContext);
  const [tmp, setTmp] = useState([])
  let ID = currentUser.id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/service/`);
        setTmp(res.data)
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
      dataIndex: 'is_effective',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, action) => (
        <Space size="middle">
          <Button>Manage</Button>
          <Button>Delete</Button>
        </Space>
      ),
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
        {/* <div className='addService'>
          <button >Add Service</button>
        </div> */}
      <Table rowKey={tmp.id} columns={columns}  dataSource={tmp}   
      pagination={{
        position: ['bottomCenter'],
        current: params.page,
        pageSize: params.per_page,
        onChange: pageChange
      }}/>
    </div>
  )
}
