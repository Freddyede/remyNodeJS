import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

export const Config = {
    get: {
        bodyParser: () => bodyParser,
        cookieParser: () => cookieParser(),
        express: () => express(),
        jsonExpress: () => express.json()
    },
    params: {
        bodyParser: {
            extended: true
        },
        view: 'pug'
    }
}