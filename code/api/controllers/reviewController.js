import { db } from "../db.js";
import moment from "moment";

export const getRewiew = (req, res) =>{
    const q =
      "SELECT r.*, u.username as name, u.img_url as avator FROM webcourse.t_review as r, webcourse.t_user as u, webcourse.t_service as s WHERE r.user_id = u.id AND r.service_id = s.id AND r.service_id = ?"

      db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
    
        return res.status(200).json(data);
    });
}

export const getReviews = (req, res) =>{
  const q = 
  "SELECT r.*, u.username, s.service_name as service_name, s.service_provider_name as provider, s.service_type as service_type FROM webcourse.t_review as r, webcourse.t_service as s, webcourse.t_user as u WHERE r.user_id = u.id AND r.service_id = s.id"

  db.query(q, [req.query.service_type], (err,data) =>{
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("Service not found!");

      return res.status(200).json(data);
  })
}

export const getRewiewProvider = (req, res) =>{
  const q =
 "SELECT r.*, s.service_name as service_name, u.username as username FROM webcourse.t_review as r, webcourse.t_service as s, webcourse.t_user as u WHERE r.user_id = u.id AND r.service_id = s.id AND s.service_provider = ?"
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data);
  });
}