import {Router} from 'express'
import multer from 'multer'
import {CreateMoviesController} from './controllers/movies/CreateMoviesController'
import {ListByMoviesController} from './controllers/movies/ListBymoviesController'
import {ListByCategoryController} from './controllers/movies/FindMovieController'

import uploadConfig from './config/multer'


const router = Router()
const upload = multer(uploadConfig.upload("./tmp"))


router.post("/movie", upload.single('file'), new CreateMoviesController().handle)

router.get("/movie", new ListByMoviesController().handle)

router.get('/movie/id', new ListByCategoryController().handle ) 


export  {router}