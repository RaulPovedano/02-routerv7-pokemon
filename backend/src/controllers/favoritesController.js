import { Favorite } from "../models/database.js";

export const addFavorites = async (req, res) => {
    try {
        const { pokemonId, pokemon } = req.body;
        
        const existe = await Favorite.findOne({ pokemonId });
        if (existe) {
            return res.status(400).json({ menssage: "Este Pokémon ya existe en tus favoritos" });
        }

        const favorite = new Favorite({ pokemonId, pokemon });
        const savedFavorite = await favorite.save();
        res.status(201).json(savedFavorite);
    } catch (error) {
        res.status(500).json({ menssage: "Error al añadir a favoritos" });
    }
};

export const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find().lean();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ menssage: "Error al obtener los favoritos" });
    }
};

export const delFavorites = async (req, res) => {
    try {
        const { id } = req.params;
        
        const favorito = await Favorite.findByIdAndDelete(id);
        if (!favorito) {
            return res.status(404).json({ menssage: "Favorito no encontrado" });
        }

        res.status(200).json({ menssage: "Favorito eliminado exitosamente", id });
    } catch (error) {
        console.error("Error al eliminar favorito:", error);
        res.status(500).json({ mensaje: "Error al eliminar el favorito" });
    }
};

export const clearFavoritos = async (req, res) => {
    try {
        await Favorite.deleteMany({});
        res.json({ menssage: "Todos los favoritos han sido eliminados" });
    } catch (error) {
        res.status(500).json({ menssage: "Error al eliminar todos los favoritos" });
    }
};
