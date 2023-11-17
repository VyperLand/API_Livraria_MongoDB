import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: {
    type: String,
    required: [true, "O título do livro é obrigatório"]
  },
  editora: {
    type: String,
    required: [true, "O nome da editora é obrigatório"],
    enum: {
      values: ["Classicos", "The real Classicos", "Os ruinzao","Os escritores"],
      message: "A editora {VALUE} informada não é permitido"
    }
  },
  preco: {type: Number},
  paginas: {
    type: Number,
    validate: {
      validator: (valor) =>{
        return valor >= 10 && valor <= 5000;
      },
      message: "O numero de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
    }
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O campo autor é obrigatório"]
  }
},{versionKey: false});

const livro = mongoose.model("livros",livroSchema);

export default livro;