import React from 'react'
import './services.scss'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from 'antd';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {Table } from 'antd';

export default function Review() {
  const { currentUser } = useContext(AuthContext);

  const [tmp, setTmp] = useState([])
  let ID = currentUser.id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/review/provider/${ID}`);
        setTmp(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [ID]);

  console.log(tmp);
  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'service_name',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
    },
    {
      title: 'Time',
      dataIndex: 'create_time',
    },
    {
      title: 'User',
      dataIndex: 'username',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      render: (rate) => <a style={{fontSize: "14px"}}>{rate} / 5</a>,
    },
    // {
    //   title: 'State',
    //   dataIndex: 'status',
    // },
    
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
