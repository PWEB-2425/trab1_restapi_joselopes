const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const swaggerDocs = require("./docs/swagger.js");

const alunoRoutes = require("./routes/routes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/alunos", alunoRoutes);

swaggerDocs(app);

mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://jose:8854@academicos.pbgpkff.mongodb.net/?retryWrites=true&w=majority&appName=academicos",
    {
      dbName: "academicos",
    }
  )
  .then(() => console.log("Ligação à base de dados com sucesso!"))
  .catch((err) => console.log("Erro na ligação à base de dados:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
