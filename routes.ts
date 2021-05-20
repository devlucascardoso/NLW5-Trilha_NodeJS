import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const SettingsController = new SettingsController();

routes.post("/settings", SettingsControllerroller.create);

export { routes };