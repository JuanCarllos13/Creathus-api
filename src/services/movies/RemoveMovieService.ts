import prismaClient from "../../prisma";

interface MovieRequest{
    movie_id: string
}


class RemoveMovieService{
    async execute({movie_id}: MovieRequest){

        const movie = await prismaClient.movie.delete({
            where:{
                id: movie_id
            }
        })

        return movie

    }
}


export {RemoveMovieService}