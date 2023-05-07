import React from 'react'
import './services.scss'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {Table, Radio} from 'antd';

export default function Admin() {
  const { currentUser } = useContext(AuthContext);

  const [tmp, setTmp] = useState([])
  let ID = currentUser.id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/users`)
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
      title: 'User Name',
      dataIndex: 'username',
    },
    {
      title: 'User Type',
      dataIndex: 'user_type',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    // {
    //   title: 'Time',
    //   dataIndex: 'create_time',
    // },
    {
      title: 'State',
      dataIndex: 'is_effective',
      render: (state) => <>
        <a>{state}</a>
        </>
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
