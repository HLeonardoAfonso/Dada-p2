const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//TEST
exports.testConnection = async (req, res) => {
    try {
        await prisma.$connect();
        res.send('success');
    } catch (error) {
        res.send('error with sql', error);
    } finally {
        await prisma.$disconnect();
    }
}

//returns all art listings
exports.getAll = async (req, res) => {
    try {
        //le toda a tabela
        const response = await prisma.Listing.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//returns art listing based on given id
exports.getById = async (req, res) => {
    const id = req.params.id*1;
    try {
        //procura o carro com o id
        const response = await prisma.Listing.findUnique({
            where: {
                id: id,
            },
        })
        //devolve o carro
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}


//create new listing
exports.create = async (req, res) => {
    const { title, price, year, tags, colection, description, coverimg, rating } = req.body;
    try {
        //criar um novo carro
        const art = await prisma.Listing.create({
            data: {
                title: title,
                price: price,
                year: year,
                tags: tags,
                colection: colection,
                description: description,
                coverimg: coverimg,
                rating: rating
            },
        })
        //devolve o carro criado
        res.status(201).json(art)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//update listing
exports.update = async (req, res) => {
    const { title, price, year, tags, colection, description, coverimg, rating } = req.body;
    try {
        //procurar o carro com id e atualizar os dados
        const art = await prisma.Listing.update({
            where: {
                id: id*1,
            },
            data: {
                title: title,
                price: price,
                year: year,
                tags: tags,
                colection: colection,
                description: description,
                coverimg: coverimg,
                rating: rating
            },
        })
        //devolve o carro atualizado
        res.status(200).json(art)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

}


//delete listing by id
exports.delete = async (req, res) => {
    //le o id do carro
    const id = req.params.id;
    try {
        //delete student
        await prisma.Listing.delete({
            where: {
                id: id*1,
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

}

