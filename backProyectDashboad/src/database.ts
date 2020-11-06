import {createPool} from 'mysql2/promise'

export async function connet(){
    const connection = await createPool({
        database:'dashboard',
        host:'127.0.0.1',
        user:'root',
        connectionLimit: 10
    })
    return connection
}