import express from "express";
import homeController from '../controller/homeController'

const router = express.Router();






const initWebRoutes = (app) => {

    router.get("/",homeController.handleHelloWord)
    router.get("/user",homeController.handleUser)
    router.post("/user/create-user",homeController.createUser)


    return app.use("/",router);
}

export default initWebRoutes;
