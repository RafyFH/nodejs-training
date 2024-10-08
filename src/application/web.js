import express from 'express';
import {publicRouter} from "../route/publicAPI.js";
import {errorMiddleware} from "../middleware/errorMiddleware.js";

export const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(errorMiddleware);