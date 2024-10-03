import express from 'express' 
import dotenv from 'dotenv'
import mustache from 'mustache-express' 
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';
import mainRoutes from '../routes/index.js'
import router from '../routes/index.js';

// Carrega as variáveis de ambiente do arquivo .env para process.env.
dotenv.config() 

 // Cria uma nova instância do servidor Express.
const server = express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Define Mustache como a engine de visualização para renderizar templates.
server.set('view engine', 'mustache') 
// Define o diretório 'views' onde os templates Mustache estão localizados.
server.set('views', path.join(__dirname, 'views')) 
// Registra a engine Mustache com o servidor Express para uso.
server.engine('mustache', mustache()) 





// Configura o servidor para servir arquivos estáticos (Imagens, Javascript, CSS) da pasta 'public'.
server.use(express.static(path.join(__dirname, '../public'))) 

server.use(router)


server.use((req,res)=>{
    res.status(404).send('Página não encontrada');
})


// Rotas
server.listen(process.env.PORT) // Faz o servidor escutar em uma porta definida nas variáveis de ambiente.
