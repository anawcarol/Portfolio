import projetoRoutes from "./projeto.routes.js"
import express from "express";

const Router =  express.Router();

Router.use("/projeto", projetoRoutes);

export default Router;
