import mongoose from "mongoose";
import Ideia from "../models/Ideia";

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()

    // Conecta com o Mongo usando a variável MONGO_URI do Railway
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(config.MONGO_URI)
    }

    const body = await readBody(event)

    const nova_ideia = await Ideia.create(body.dados)

    return {
      statusCode: 200,
      success: true,
      message: "IDEIA ADICIONADA COM SUCESSO! EM BREVE ENTRAREMOS EM CONTATO!",
      nova_ideia,
    }
  } catch (erro) {
    console.error(`Erro ao processar a ideia: ${erro}`)
    return {
      statusCode: 500,
      success: false,
      message: "Erro ao processar a ideia",
      erro,
    }
  }
})
