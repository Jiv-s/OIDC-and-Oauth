import express ,{ type Express,type Request,type Response } from "express";
export default function createApplication():Express{
    const app = express()
    //middleware

    //routes

    app.get('/',(req:Request,res:Response)=>{
        return res.json({message:"welcome to my oauth"})
    })

    return app
}