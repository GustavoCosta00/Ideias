export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-04-11",
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI || "mongodb+srv://gustavo:gustavinMarmitinha@ideias.2wnnsyo.mongodb.net/?retryWrites=true&w=majority&appName=Ideias"
  }
});