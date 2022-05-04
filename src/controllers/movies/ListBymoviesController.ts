import {Request, Response} from 'express'
import {ListByMoviesService} from '../../services/movies/ListByMoviesService'


class ListByMoviesController{
    async handle(req: Request, res: Response){
        

        const listByMovies = new ListByMoviesService()

        const movies = await listByMovies.execute()

        return res.json(movies)
    }
}

export {ListByMoviesController}