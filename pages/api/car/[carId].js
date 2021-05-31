import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
    const { carId } = req.query
    // console.log(carId)
    const car = await prisma.car.findUnique({
        where: {
            id: parseInt(carId)
        }
    })
    // console.log(car)

    res.status(200).json(car)
}
