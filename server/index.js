import express  from 'express';
import routes from './routes/route.js'
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use(cors())




app.use(express.json())
app.use('/',routes)

const PORT = 8000;

Connection()

app.listen(PORT,()=>{console.log('connected tot server')})

