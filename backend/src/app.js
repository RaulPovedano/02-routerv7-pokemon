import express from "express";
import cors from "cors";
import pokemonRoutes from "./routers/pokemonRouter.js";
import favoriteRoutes from "./routers/favoriteRouter.js";
import { connectDB } from "./data/data.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

connectDB();

app.use("/api/pokemon", pokemonRoutes);
app.use("/api/favorite", favoriteRoutes);

app.get("/", (req, res) => {
    res.json({ message: "API Pokemon funcionando" });
});

export default app;