import React from 'react'
import './history.scss'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {Space, Table } from 'antd';

export default function History() {

  const { currentUser } = useContext(AuthContext);
  const [request, setRequest] = useState({});

  const setColor = (dataVal) => {
    if(dataVal = 0) return 'red';
    if(dataVal < 0) return 'green';
    return 'default';
  }

  let ID = currentUser.id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/request/${ID}`);

        setArticleList({
          list: res.data
        })
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [ID]);

  const columns = [
    {
      title: 'Request Name',
      dataIndex: 'request_name',
      key: 'request_name',
    },
    {
      title: 'Request Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'State',
      key: 'status',
      dataIndex: 'status',
      render: (_, status) => (
        <Space size="middle">
            <a class="setColor(status.status)"> {status.status}</a>
        </Space>
      ),
    },

    {
      title: 'Provider',
      key: 'provider_name',
      dataIndex: 'provider_name',
    },
  ];

  const pageChange = (page) => {
    // 拿到当前页参数 修改params 引起接口更新
    setParams({
      ...params,
      page
    })
}

const [article, setArticleList] = useState({
  list: []
})
const [params, setParams] = useState({
  page: 1,
  per_page: 10
})
  return (
    <div className="history">
        
      <Table rowKey={"id"} columns={columns} dataSource={article.list}       
      pagination={{
        position: ['bottomCenter'],
        current: params.page,
        pageSize: params.per_page,
        onChange: pageChange
      }}/>
    </div>
  )
}
