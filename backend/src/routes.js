import { Router } from "express";

import UserController from "./app/controllers/TaskController";

const routes = new Router();

routes.get("/tasks", UserController.index);

export default routes;
