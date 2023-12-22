import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Config } from "../config";

export const port = 3000;
export const app = express();

app.set('view engine', Config.Params.view)
    .use(cookieParser())
    .use(bodyParser.urlencoded(Config.Params.bodyParser))
    .use(express.json());
