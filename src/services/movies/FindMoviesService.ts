import prismaClient from '../../prisma'

interface ProductRequest{
   id: string
}


class ListByCategoryService{
    async execute({id}: ProductRequest){
        // id-bebidas

        const findByCategory = await prismaClient.movie.findMany({
            where:{
                id: id
            }
        })

        return findByCategory
    }
}

export {ListByCategoryService}