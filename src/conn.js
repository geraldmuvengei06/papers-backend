const {PrismaClient} = require('@prisma/client')

const prismaConn = new PrismaClient()

const connect = async () => {
    await prisma.$connect();
} 

const disconnect = async () => {
    await prisma.$disconnect()
}

module.exports = { prismaConn, connect, disconnect }