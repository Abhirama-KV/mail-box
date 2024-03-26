import express from 'express'
const app = express();

import { deleteMail, getEmail, saveSentEmail, sentMail, setStarred } from '../controller/email-controller.js';


const routes = express.Router()

routes.post('/save',saveSentEmail)
routes.get('/save/:type',getEmail)
routes.post('/starred/:id',setStarred)
routes.post('/delete/:id',deleteMail)
routes.get('/sent/:id',sentMail)

export default routes;