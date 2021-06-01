import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'
import fs from 'fs'
import path from 'path'
import base64Img from 'base64-img'
import { redirect } from "next/dist/next-server/server/api-utils"

const prisma = new PrismaClient()

export default async (req, res) => {
    const session = getSession(req)
    if (session) {
        const { method, body } = req
        if (method == 'PUT') {
            const data = JSON.parse(body);
    
            const deleteCar = await prisma.car.delete({
                where: {
                    id: data.id
                }
            });
    
            res.status(200).json(deleteCar)
        }
    } else {
        redirect('/admin/login')
    }
}
