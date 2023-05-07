import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {Card } from 'antd';

export default function Review(id) {
    const [reviews, setReview] = useState([]);
    const r_id = Object.values(id)
    console.log(r_id);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await axios.get(`/review/${r_id}`);
            setReview(res.data);
        } catch (err) {
            console.log(err);
        }
        };
        fetchData();
    }, [id]);
    console.log(reviews);
  return (
    <div>
        {reviews.map((review) => (
          <Card className='r-card'>
            <div className="service" key={review.id}>
              <div className="content">
                {/* <Link className="link" to={`/customer/service/${service.id}`}>
                  <h1>{service.service_name}</h1>
                </Link> */}
                <div className="avatar">
                  <img style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                  }}
                  src={review.avator} alt="" />
                  <span>
                    {review.name}</span>
                    <h6> {review.rate} / 5</h6>
                </div>
                <p>{review.comment}</p>
              </div>
            </div>
            </Card>
          ))}
    </div>
  )
}
