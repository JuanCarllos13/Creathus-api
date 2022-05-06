import { Request, Response} from 'express'
import {RemoveMovieService} from '../../services/movies/RemoveMovieService'

class RemoveMovieController{
    async handle(req: Request, res: Response){

        const movie_id = req.query.movie_id as string;

        const removeMovie =  new RemoveMovieService()

        const movie = await removeMovie.execute({
            movie_id
        })

        return res.json(movie)



    }

}


export {RemoveMovieController}