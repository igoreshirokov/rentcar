import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'
import { redirect } from "next/dist/next-server/server/api-utils"
import { BASE_URL } from "../../../components/Constants"
import excessimages from "../../../utils/excessimages"

const prisma = new PrismaClient()

export default async (req, res) => {
    const session = await getSession({ req })
    if (session) {
        const { method, body } = req


        if (method == 'DELETE') {
            const data = JSON.parse(body);

            const deleteCar = await prisma.car.delete({
                where: {
                    id: data.id
                }
            });
            await prisma.$disconnect()
            const deleteExcessImages = await excessimages()
            res.status(200).json({deleteCar, deleteExcessImages})
        }
    } else {
        redirect('/admin/login')
    }
}
