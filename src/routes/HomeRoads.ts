import express from "express";
import { setCookieMiddleWare } from "../middleware";
import { login, logout } from "../controllers/AuthController";
import { index } from "../controllers/HomeController";


const HomeRoads = express.Router();
HomeRoads.get('/', index)
    .get('/login', login)
    .post('/login', setCookieMiddleWare)
    .get('/logout', logout);

export default HomeRoads;