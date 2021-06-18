import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    const { method } = req
    const { carId } = req.query

    switch (method) {
        case 'GET':
            // Get data from database with carId
            const car = await prisma.car.findUnique({
                where: {
                    id: parseInt(carId)
                }
            });
            
            res.status(200).json(car)
            break
        }

}
