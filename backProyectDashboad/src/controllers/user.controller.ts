import {request, Request, response, Response} from 'express'
import {connet} from '../database'

export async function getUsers(req:Request, res:Response){
    const conn = await connet() 
    const users = await conn.query("SELECT * FROM user")
    res.json({"status":"OK", "user": users[0]})
}

export async function createUser(req:Request, res:Response){
    const conn = await connet()
    const newPost = req.query //req.body
    return res.json({
        "req": newPost
    })
}