import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

export const Config = {
    app: {
        port: 3000,
        get: {
            bodyParser: () => bodyParser,
            cookieParser: () => cookieParser(),
            express: () => express(),
            jsonExpress: () => express.json(),
            views: () => 'view engine'
        },
        params: {
            bodyParser: {
                extended: true
            },
            view: 'pug'
        }
    },
    databases: {}
}