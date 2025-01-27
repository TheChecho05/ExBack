import mongoose from "mongoose";

const rolSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    permisos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Permiso" }],  
    estado: { type: Number, default: 1 },  
});

export default mongoose.model("Rol", rolSchema);
