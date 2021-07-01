import { format } from 'date-fns'
import path from 'path'
import { getSession } from 'next-auth/client'
import fs, { unlink } from 'fs'
import { PrismaClient } from "@prisma/client"
import { redirect } from 'next/dist/next-server/server/api-utils'
const prisma = new PrismaClient()

const uploadPath = path.join(process.cwd(), 'public', 'upload');

async function getImageUrlsFromDatabase() {
    let images = await prisma.car.findMany({
        select: {
            Images: true
        }
    })
    images = await images.map((img, index) => JSON.parse(img.Images.replaceAll('/upload/', ''))).flat()
    return images
}

async function getFiles() {
    let files = fs.readdirSync(uploadPath, (err, data) => {
        if (err) throw err;
        return data
    })

    return files
}
function removeFiles(files) {
    // Удаляет все файлы входящего массива
    files.forEach((file) => {
        unlink(path.join(uploadPath, file), (err) => {
            if (err) throw err
        })
    })

}
export default async function (req, res) {
    const session = await getSession({ req })
    if (session) {
        // Получает все ссылки на изображения в базе
        const urls = await getImageUrlsFromDatabase();
        // Получает все файлы в папке upload
        const files = await getFiles()
        // Находит файлы которых нет в базе
        let removed = files.filter(file => {
            return !urls.includes(file)
        })
        // Удаляет невостребованные файлы
        removed.length > 0 ? removeFiles(removed) : removed = 'нет невостребованных файлов'
        // res.json({urls,files,removed})
        fs.appendFileSync(path.join(process.cwd(), 'logs', 'deleted_images.log'),"[" + format(Date.now(), 'dd/MM/yyyy - k:m:s') + "] --- " + removed + "\n")

        res.status(200).json(removed)
    } else {
        redirect('/admin/login')
    }
}