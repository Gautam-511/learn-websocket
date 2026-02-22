import express, { Request, Response } from "express";
import { WebSocketServer } from "ws";

const app = express();
const server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const wss = new WebSocketServer({ server });

app.get("/", (req: Request, res:Response) => {
    res.json({msg: "hi there"});
    
})

wss.on('connection', function connection(ws) {
    ws.send('connected to express server');
    ws.on('error', console.error);
    ws.on('message', function message(data){
        console.log('received: ' + data.toString());
    })
});