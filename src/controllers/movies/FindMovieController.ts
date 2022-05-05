import {Request, Response} from 'express'
import { ListByCategoryService } from '../../services/movies/FindMoviesService'



class ListByCategoryController{
    async handle(req: Request, res: Response){

        const id = req.query.id as string; ///Tem que passar o query

        const findByMoviesService = new ListByCategoryService()

        const movie = await findByMoviesService.execute({
            id
        })
    
        return res.json(movie)
    }
} 


export {ListByCategoryController}