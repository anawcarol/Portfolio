import projetoController from "../controllers/projeto.controller.js";
import express from "express";

const ProjetoRouter = express.Router();

ProjetoRouter.post("/", projetoController.CreateController);

ProjetoRouter.get("/", projetoController.FindAllController);

ProjetoRouter.get("/:_id", projetoController.FindyIdController);

ProjetoRouter.delete("/", projetoController.DeleteController);

ProjetoRouter.patch("/", projetoController.UpdateController);

export default ProjetoRouter;
