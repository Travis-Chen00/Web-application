import express from "express"
import {getServices, getService, addService, deleteService, upadteService, searchService, searchProvider, providerService} from "../controllers/serviceController.js"

const router = express.Router()

router.get("/", getServices)
router.get("/:id", getService)
router.get("/provider/:id", providerService)
router.post("/", addService)
router.delete("/:id", deleteService)
router.put("/:id", upadteService)

router.get("/searchs/:name", searchService)
router.get("/searchp/:name", searchProvider)

export default router