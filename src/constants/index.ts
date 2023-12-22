import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

export const port = 3000;
export const app = express();

app
    .set('view engine', 'pug')
    .use(cookieParser())
    .use(bodyParser.urlencoded({
            extended: true
        }
    )).use(express.json());
