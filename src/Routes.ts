import { Router } from "express";
import { RoomControler } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";

const routes = Router();

routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomControler().create);
export default routes;
