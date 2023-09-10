import "reflect-metadata";
import "express-async-errors";
import express from "express";
import {
  userRouter,
  sessionRouter,
  categoryRouter,
  realEstateRouter,
} from "./routers";
import middlewares from "./middlewares";
import { scheduleRouter } from "./routers/schedule.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);
app.use("/schedules", scheduleRouter);
app.use("/realEstate", realEstateRouter);

app.use(middlewares.handleError);

export default app;
