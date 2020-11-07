import express from 'express'; 
import cors from 'cors'

import'reflect-metadata'
import {createConnection} from 'typeorm'
// routes
import indexRouter from './routes/index.route'
import userRouter from './routes/user.router'

export class App{
    app: express.Application

    constructor(private port?: number | string){
        this.app = express()
        this.settings();
        this.middleware();
        this.routes();
        createConnection()
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    middleware(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes(){
        this.app.use(indexRouter)
        this.app.use('/user/',userRouter)
    }

    async listen(){
        await this.app.listen(this.app.get('port'))
        console.log("server on port ", this.app.get('port'))
    }
}