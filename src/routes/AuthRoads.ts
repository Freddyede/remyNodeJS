import express from "express";
import { index } from "../controllers/AdminController";

const AdminRoads = express.Router();

AdminRoads.get('/admin', index)

export default AdminRoads;