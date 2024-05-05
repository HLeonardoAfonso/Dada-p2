const fs = require('fs');

//returns all art listings
exports.getAll = async (req, res) => {
    //read file
    const datajson = fs.readFileSync('data/local/data.json', "utf-8");
    //parse json
    const data = JSON.parse(datajson);
    //return listings
    return res.send(data.carros);
}

//returns art listing based on given id
exports.getById = async (req, res) => {
    //get listing id
    const id = req.params.id;
    //read file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse json
    const data = JSON.parse(datajson);
    //search listing with the id
    const carros = data.carros.filter(carros => carros.id == id);
    //return listing
    res.send(carros);
}


//criate new listing
exports.create = async (req, res) => {
    //obtain data from form
    const {id, title, price, year, tag, colection, description} = req.body;
    //read file 
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse json
    const data = JSON.parse(datajson);
    //add new listing to the list
    data.carros.push(req.body);
    //create a new file with the new listing
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return
    return res.status(201).send(req.body);
}

//update listing
exports.update = async (req, res) => {
    //get the listing by id
    const {id, Marca, Detalhes, Foto} = req.body;
    //read file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse json
    const data = JSON.parse(datajson);
    //search the listing with the id
    const carros = data.carros.find(carro => carro.id == id);
    //update listing information
    carros.Marca = Marca;
    carros.Detalhes = Detalhes;
    carros.Foto = Foto;
    //create a new file with the new data
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return
    return res.send({id, Marca, Detalhes, Foto});
}


//delete listing by id
exports.delete = async (req, res) => {
    //get the listing by id
    const id = req.params.id;
    //read file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse json
    const data = JSON.parse(datajson);
    //search index of the listing
    const carroIndex  = data.carros.findIndex(carro => carro.id == id);
    //verify that the listing was found
    if (carroIndex !== -1) {
        //remove the listing
        const apagaCarro = data.carros.splice(carroIndex, 1)[0];
        //create a new file with the new data
        fs.writeFileSync('data/local/data.json', JSON.stringify(data));
        //return
        return res.status(200).send(apagaCarro);
    } else {
        //if not found, return error
        return res.status(404).send("Carro não encontrado");
    }
}

