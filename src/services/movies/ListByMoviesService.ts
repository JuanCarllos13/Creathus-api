import prismaClient from "../../prisma";


class ListByMoviesService{
    async execute(){


        const findByMovies = await prismaClient.movie.findMany({
            select:{
                id: true,
                autor: true,
                title: true,
                descripion: true,
                image: true
            }
        })
        return findByMovies
    }
}


export {ListByMoviesService}