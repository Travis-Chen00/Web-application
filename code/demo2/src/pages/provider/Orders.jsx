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

export default function Service() {
  const { currentUser } = useContext(AuthContext);
  const [service, setService] = useState([{
    id: " ",
    request_name: " ",
    // request_type: "",
    requirement: "",
    address: " ",
    time: " ",
    userName: " ",
    email: " ",
    status: " "
}])

let [data, setData] = useState([]);

  const [tmp, setTmp] = useState([])
  let ID = currentUser.id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/request/provider/${ID}`);
        setTmp(res.data)
        let { data, total } = res.data
        data.forEach((r, i) => {
            r.key = i;
          });
        setData(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [ID]);

  console.log(tmp);
  const columns = [
    {
      title: 'Request Name',
      dataIndex: 'request_name',
    },
    // {
    //   title: 'Request Type',
    //   dataIndex: 'request_type',
    // },
    {
      title: 'Requirement',
      dataIndex: 'requirements',
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
      title: 'User',
      dataIndex: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
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
