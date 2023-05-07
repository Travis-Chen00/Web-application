import express from "express"
import {addRequest, getRequest, providerRequest, getRequests} from "../controllers/requestController.js"

const router = express.Router()

router.post("/", addRequest)
router.get("/", getRequests)
router.get("/:id", getRequest)
router.get("/provider/:id", providerRequest)
export default router