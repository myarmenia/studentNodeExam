import { configDotenv } from "dotenv"
import {fileURLToPath} from "url"
import express from "express"
import path from "path"
import cors from "cors"


import Connection from "./Utils/Connection.js"
import Credentials from "./Config/Credentials.js"
import CorsOptions from "./Config/CorsOptions.js"


import SeedRouter from "./Route/SeedRouter.js"
import WinesRouter from "./Route/WinesRouter.js"
import AuthRouter from "./Route/AuthRouter.js"
import CartRouter from "./Route/CartRouter.js"
import isAuth from "./Middleware/isAuth.js"
import viewsRouter from "./Route/ViewsRouter.js"
import UsersRouter from "./Route/UsersRouter.js"


const app = express()
const dotenv = configDotenv()
Connection()

app.set("view engine", "ejs")

app.use(Credentials)
app.use(cors(CorsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views", path.join(__dirname,"Views"))
app.use(express.static(path.join(__dirname,"Public")))
app.use("/api/seed", SeedRouter)
app.use("/api/wines", WinesRouter)
app.use("/api/cart", isAuth,CartRouter)
app.use("/api/auth", AuthRouter)
app.use("/api/user",isAuth, UsersRouter)
app.use("/", viewsRouter)


const PORT = process.env.PORT || 6000

app.listen(PORT,()=>console.log(`Server listening at ${PORT}`))
