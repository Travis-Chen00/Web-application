import { db } from "../db.js";
import moment from "moment";

export const getRequests = (req, res) =>{
    const q = 
        "SELECT r.*, u.username, s.service_provider_name as provider FROM webcourse.t_service_request as r, webcourse.t_service as s, webcourse.t_user as u WHERE r.user_id = u.id AND r.service_id = s.service_provider"

    db.query(q, [req.query.service_type], (err,data) =>{
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("Service not found!");

        return res.status(200).json(data);
    })
}

export const addRequest = (req, res) =>{
    const q =
      "INSERT INTO webcourse.t_service_request(`user_id`, `request_name`, `requirements`, `status`, `address`, `time`, `create_time`, `service_id`, `image`) VALUES (?)";
    const values = [
      req.body.user_id,
      req.body.request_name,
      req.body.requirements,
      "0",
      req.body.address,
      req.body.time,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.service_id,
      req.body.image,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Services has been applied.");
    });
}

export const getRequest = (req, res) =>{
    const q =
      "SELECT  DISTINCT r.*, s.service_type as type, s.service_provider_name as provider_name FROM webcourse.t_service_request as r JOIN webcourse.t_service as s ON s.service_provider = r.service_id WHERE r.user_id = ?";

      db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
    
        return res.status(200).json(data);
    });
}

export const providerRequest = (req, res) =>{
    const q = "SELECT DISTINCT r.*, u.username as userName, u.email as email FROM webcourse.t_service_request as r, webcourse.t_user as u WHERE u.id = r.user_id AND r.service_id = ?"
      db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
    
        return res.status(200).json(data);
    });
}