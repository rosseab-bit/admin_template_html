import {Router} from "express"
import {Controller} from "../controller/build";
import {ControllerFiles} from "../controller/manageFiles";
export const defaultRoute = Router();


defaultRoute.get('/ping', Controller.ping);
defaultRoute.post('/ping', Controller.buildTemplate);
defaultRoute.post('/upload', Controller.uploadTemplate);
defaultRoute.get('/listfile', ControllerFiles.listFiles); 
defaultRoute.get('/listimg', ControllerFiles.listImages); 
defaultRoute.get('/listdoc', ControllerFiles.listDocs); 
defaultRoute.get('/listvideos', ControllerFiles.listVideos); 
defaultRoute.get('/download', ControllerFiles.downloadFile); 
defaultRoute.get('/recents', ControllerFiles.listRecentsFiles); 
