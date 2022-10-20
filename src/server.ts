import express from 'express'
import { json } from 'body-parser'

const server = express();
server.use(json());

export default server