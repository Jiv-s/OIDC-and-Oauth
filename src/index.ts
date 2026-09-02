import {createServer} from "node:http"

import createApplication from "./app/index.js"
async function main(){
    try{
        const app = createApplication();
        const server = createServer(app);
        const Port:number = 8080

        server.listen(Port,()=>{
            console.log(`http runnin on port ${Port}`)
        })
    }
    catch (e){
        console.log("error starting server")
        throw e
    }
    
}
main()