import express from "express"
import cookieParser from "cookie-parser"

const app =express()

//middlwares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//routers
app.get("/",(req,res)=>{
    res.send("OIDC server")
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
})