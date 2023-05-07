import React from 'react'
import './services.scss'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {Table } from 'antd';

export default function Request() {
  const { currentUser } = useContext(AuthContext);
  const [tmp, setTmp] = useState([])
  let ID = currentUser.id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/request/`);
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
      dataIndex: 'request_name',
    },
    {
      title: 'Customer',
      dataIndex: 'username',
    },
    {
      title: 'Provider',
      dataIndex: 'provider',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
        title: 'Time',
        dataIndex: 'time',
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
          <button >Add Service</button>
        </div>
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
