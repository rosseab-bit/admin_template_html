import {Router} from "express"
import {Controller} from "../controller/build";
export const defaultRoute = Router();


defaultRoute.get('/ping', Controller.ping);
defaultRoute.post('/ping', Controller.buildTemplate);
defaultRoute.post('/upload', Controller.uploadTemplate);
