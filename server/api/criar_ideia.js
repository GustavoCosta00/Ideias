import mongoose from "mongoose";
import Ideia from "../models/Ideia";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        const nova_ideia = await Ideia.create(body.dados)
        return {
            statusCode : 200,
            success: true,
            message: "IDEIA ADICIONADA COM SUCESSO! EM BREVE ENTRAREMOS EM CONTATO!",
            nova_ideia,
          };        
    } catch (erro) {
        console.log(`Erro ao processar a ideia: ${erro}`);
    }
});
