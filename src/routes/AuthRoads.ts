import express from "express";
import {index, providers} from "../controllers/AdminController";

const AdminRoads = express.Router();

AdminRoads.get('/', index)
AdminRoads.get('/providers', providers)

export default AdminRoads;