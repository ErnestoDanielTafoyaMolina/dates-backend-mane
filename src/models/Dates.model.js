import { mongoose } from "mongoose";

const dateSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    contenido: {
        type: String,
        required: true,
    },
    fechaCita: {
        type: Date,
        required: true,
    },
    numeroTelefono: {
        type: String,
        required: true,
    },
    mensaje: {
        type: String, 
        required:true,
    },
});

const DateModel = mongoose.model('Date', dateSchema);

export default DateModel;
