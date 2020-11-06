import express from 'express'; 

export class App{
    app: express.Application

    constructor(private port?: number | string){
        this.app = express()
        this.settings();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    async listen(){
        await this.app.listen(this.app.get('port'))
        console.log("server on port ", this.app.get('port'))
    }
}