import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response,NextFunction } from "express"
import { AppDataSource } from "./data-source"
import * as cors from "cors"
import * as morgan from "morgan"
import { AppError } from "./Utils/AppError"
import TeacherDataRoutes from './Routes/TeacherData.Routes'
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use(cors({origin:'*'}))
    app.use(morgan('dev'))
    app.get('/',(req:Request, res:Response, next:NextFunction)=>{
        res.json({message:"School"})
    })
    // register express routes from defined application routes
    
    app.use(TeacherDataRoutes)
    // setup express app here

    // Global error handling
    app.use((error:AppError, req:Request, res:Response, next:NextFunction)=>{
        error.status=error.status||'error';
        error.StatusCode=error.StatusCode||500;
        res.status(error.StatusCode).json({
            status:error.status,
            message:error.message
        })
    })


    // start express server
    app.listen(3000)

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
