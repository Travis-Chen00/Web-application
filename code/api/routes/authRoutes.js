import express from "express"
import { login, logout, register, providerRegister } from "../controllers/authController.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

router.post("/register/provider", providerRegister)
export default router