import prismaClient from "../../prisma";

interface MoviesRequest{
    autor: string
    title: string
    descripion: string
    image: string
}

class CreateMoviesService{
    async execute({autor, title, descripion, image}: MoviesRequest){

        const movie = await prismaClient.movie.create({
            data:{
                autor: autor,
                title: title,
                descripion: descripion,
                image: image
            }
        })
        return movie
    }
}

export {CreateMoviesService}