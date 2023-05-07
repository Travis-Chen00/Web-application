import express from "express";
import serviceRoute from "./routes/serviceRoutes.js"
import usersRoute from "./routes/usersRoutes.js"
import authRoute from "./routes/authRoutes.js"
import requestRoute from "./routes/requestRoutes.js"
import reviewRoute from "./routes/reviewRoutes.js"
import cors from 'cors'
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express()

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });

app.use(express.json())
app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(cookieParser());

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post("/api/upload", upload.single("image"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
  });

app.use("/api/service", serviceRoute)
app.use("/api/users", usersRoute)
app.use("/api/auth", authRoute)
app.use("/api/request", requestRoute)
app.use("/api/review", reviewRoute)

app.listen(8800, ()=>{
    console.log("connected");
})