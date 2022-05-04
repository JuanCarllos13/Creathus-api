import { Request, Response } from 'express'
import { CreateMoviesService } from '../../services/movies/CreateMoviesService'


class CreateMoviesController {
    async handle(req: Request, res: Response) {
        const { autor, title, descripion } = req.body

        const createMoviesServices = new CreateMoviesService()

        if (!req.file) {
            throw new Error("error upload file")
        } else {
            const {originalname, filename: image } = req.file

            const movie = await createMoviesServices.execute({
                autor,
                title,
                descripion,
                image
            })
            return res.json(movie)

        }
    }

}

export { CreateMoviesController }