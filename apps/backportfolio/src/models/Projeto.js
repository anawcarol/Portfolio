import mongoose from "mongoose";

const ProjetoSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    description: {
        type: String,   
        required: true,
    },

    link: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,     
    },

    slug: {
        type: String,
        required: true,
        unique: true,
    },


},{timestamps: true}); //para acrescentar createdAt e updatedAt automaticamente, do tipo data, indicando quando o dado foi criado e atualizado 

const Projeto = mongoose.model("Projeto", ProjetoSchema);

export default Projeto;