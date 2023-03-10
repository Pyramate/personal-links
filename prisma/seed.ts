import { PrismaClient } from "@prisma/client";
import { userInfo } from "os";
import { links } from "../data/links"

const prisma = new PrismaClient()

const main = async () => {     
    await prisma.user.create({ 
    data: {
    email: `testemail@gmail.com`,
    role: 'ADMIN',
        },
    }) 

    await prisma.link.createMany({
        data: links,
      })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })