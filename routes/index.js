import { Router } from "express";
import * as PageController from '../src/controllers/pageController.js'
import * as SearchController from '../src/controllers/searchController.js'



const router = Router()

router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)

router.get('/search', SearchController.search)

router.get('/info',(req,res)=>{
    const name = 'matoias'
    const idade = 15

    res.json({name,idade})
})

export default router