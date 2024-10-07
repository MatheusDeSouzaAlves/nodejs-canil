import { Router } from "express";
import * as PageController from '../src/controllers/pageController.js'
import * as SearchController from '../src/controllers/searchController.js'



const router = Router()

router.get('/', (req, res) => {
    res.render('pages/page',{
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        }
    });
    

})

router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)
router.get('/search', SearchController.search)

router.get('/info',(req,res)=>{
    const name = 'matoias'
    const idade = 15

    res.json({name,idade})
})


router.use((req,res)=>{
    res.status(404).send('Página não encontrada');
})

export default router