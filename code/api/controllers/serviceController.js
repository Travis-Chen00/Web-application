import { db } from "../db.js";

export const getServices = (req, res) =>{
    const q = req.query.service_type ? 
        "SELECT u.img_url as u_img, s.* FROM webcourse.t_service as s JOIN webcourse.t_user as u ON s.service_provider = u.id WHERE service_type=?":
        "SELECT u.img_url as u_img, s.* FROM webcourse.t_service as s JOIN webcourse.t_user as u ON s.service_provider = u.id"

    db.query(q, [req.query.service_type], (err,data) =>{
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("Service not found!");

        return res.status(200).json(data);
    })
}

export const getService = (req, res) =>{
    const q = "SELECT u.img_url as u_img, u.username as provider, s.* FROM webcourse.t_service as s JOIN webcourse.t_user as u ON s.service_provider = u.id WHERE s.id = ?"
    
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
    
        return res.status(200).json(data[0]);
    });
}

export const providerService = (req, res) =>{
    const q = "SELECT u.img_url as u_img, u.username as provider, s.* FROM webcourse.t_service as s, webcourse.t_user as u WHERE s.service_provider = u.id AND s.service_provider = ?"
    
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
    
        return res.status(200).json(data[0]);
    });
}

export const searchService = (req, res) =>{
    const q = "SELECT u.img_url as u_img, s.* FROM webcourse.t_service as s JOIN webcourse.t_user as u ON s.service_provider = u.id WHERE s.service_name = ?"
    
    db.query(q, [req.params.name], (err, data) => {
        if (err) return res.status(500).json(err);
    
        return res.status(200).json(data);
    });
}

export const searchProvider = (req, res) =>{
    const q = "SELECT s.service_name as service, s.service_type as type, s.price as price, s.img as img, u.username as provider, u.img_url as u_img, "
    + "s.service_description as description FROM webcourse.t_service as s JOIN webcourse.t_user as u ON s.service_provider = u.id WHERE s.service_provider_name = ?"
    
    db.query(q, [req.params.name], (err, data) => {
        if (err) return res.status(500).json(err);
    
        return res.status(200).json(data);
    });
}


export const addService = (req, res) =>{
    
}

export const deleteService = (req, res) =>{
    
}

export const upadteService = (req, res) =>{
    
}