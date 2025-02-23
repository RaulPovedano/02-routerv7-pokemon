import express from "express";
import { getFavorites, addFavorites, delFavorites } from "../controllers/favoritesController.js";

const router = express.Router();

router.get("/", getFavorites);
router.post("/", addFavorites);
router.delete("/:id", delFavorites);

export default router;
