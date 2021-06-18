import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {

    const cars = await prisma.car.findMany()
    
    res.status(200).json(cars)
  }
  