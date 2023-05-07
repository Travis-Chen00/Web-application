import express from "express"
import { getRewiew, getRewiewProvider, getReviews } from "../controllers/reviewController.js"

const router = express.Router()

// router.post("/", addRequest)
router.get("/:id", getRewiew)
router.get("/", getReviews)
router.get("/provider/:id", getRewiewProvider)

export default router