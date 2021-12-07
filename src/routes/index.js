import express from "express";
import * as indexController from '../controller/index.controller.js';

const router = express.Router();

router.get('/', indexController.getIndex);

export default router;