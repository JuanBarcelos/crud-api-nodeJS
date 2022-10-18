import { Router } from "express";
import { RoomControler } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";

const routes = Router();

routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomControler().create);
routes.get('/room', new RoomControler().list);
routes.post('/room/:idRoom/create', new RoomControler().createVideo);
routes.post('/room/:idRoom/subject', new RoomControler().roomSubject);

export default routes;
