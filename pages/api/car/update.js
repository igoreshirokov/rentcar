import { PrismaClient } from "@prisma/client"
import { getSession } from 'next-auth/client'
import fs from 'fs'
import path from 'path'
import base64Img from 'base64-img'
import { BASE_URL } from "../../../components/Constants"

const prisma = new PrismaClient()

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '20mb',
        },
    },
}

function saveFile(file) {
    const fileName = Date.now()
    const uploadPath = path.join(process.cwd(), 'public', 'upload');
    const fileP = base64Img.imgSync(file, uploadPath, fileName)

    const fileurl = '/' + fileP
        .split(path.sep)
        .splice(-2)
        .join('/');

    return fileurl
}

export default async (req, res) => {
    const session = await getSession({ req })
    if (session) {

        const { method, body } = req
        if (method == 'PUT') {
            const data = JSON.parse(body)
            const images = JSON.parse(data.Images)
            const iPrep = images.map(image => {
                if (image.match('base64')) {
                    return saveFile(image)
                } else {
                    return image
                }
            })
            // {...data, Images: JSON.stringify(iPrep)}
            const dataUpdate = {
                id: parseInt(data.id),
                model: data.model,
                Year: parseInt(data.Year),
                Engine: data.Engine,
                Fuel: data.Fuel,
                Transmission: data.Transmission,
                Doors: parseInt(data.Doors),
                Consumption: parseInt(data.Consumption),
                Day: parseInt(data.Day),
                Sixday: parseInt(data.Sixday),
                Week: parseInt(data.Week),
                Month: parseInt(data.Month),
                Images: JSON.stringify(iPrep)
            }

            const updateCar = await prisma.car.update({
                where: {
                    id: dataUpdate.id
                },
                data: dataUpdate
            })

            fetch(BASE_URL + 'api/car/excessimages')
            res.status(200).json(updateCar)
        }
    } else {
        redirect('/admin/login')
    }
}
