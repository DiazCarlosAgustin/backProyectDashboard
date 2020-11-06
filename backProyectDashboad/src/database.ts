import {createPool} from 'mysql2/promise'

function connet(){
    createPool({
        database:'dashboard',
        host:'127.0.0.1',
        port:3360,
        user:'root',
    })
}