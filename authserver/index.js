import express from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import {randomBytes,createHash} from "crypto"
import {signJWT,exportJWK,importPKCS8} from "jose"

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser())

const clients = new Map()
const authorizationCodes = new Map()
const returnTokens = new Map()

clients.set("demo-client" ,{
    client_id:"demo-client",
    redirecturis:["https://localhost:4000/callback"]
})