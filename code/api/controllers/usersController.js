import { db } from "../db.js";

export const getUsers = (req, res) =>{
    const q = 
        "SELECT u.* FROM webcourse.t_user as u"

    db.query(q, [req.query.service_type], (err,data) =>{
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("Service not found!");

        return res.status(200).json(data);
    })
}