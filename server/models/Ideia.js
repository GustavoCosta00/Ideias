import mongoose from "mongoose";

const Ideia = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome da pessoa é obrigatório']
    },
    telefone: {
        type: String,
        required: [true, 'O número de telefone é obrigatório']
    },
    ideia: {
        type: String,
        required:[true, 'A ideia é obrigatória']
        
    },
})


export default mongoose.model('Ideias', Ideia)