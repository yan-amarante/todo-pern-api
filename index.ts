import  Express  from "express"
import tarefasRouter from "./src/tarefas/routes.js";
import bodyParser from "body-parser";
import cors from "cors"

const app = Express();
const port:number = 3000;

app.use(cors({
    origin: "*"
}))

app.use(bodyParser.json());

app.use('/api/v1/tarefas/', tarefasRouter);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

