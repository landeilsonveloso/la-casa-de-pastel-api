import app from "./src/app.js"
import envConfig from "./src/config/config.js"

app.listen(envConfig.PORT, () => console.log("Servidor em execução: https://la-casa-de-pastel-api.vercel.app"))
