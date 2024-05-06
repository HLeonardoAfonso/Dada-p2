const fs = require('fs');

//returns all art listings
exports.getAll = async (req, res) => {
    //read file
    const datajson = fs.readFileSync('data/local/data.json', "utf-8");
    //parse json
    const data = JSON.parse(datajson);
    //return listings
    return res.send(data.art);
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
    const art = data.art.filter(art => art.id == id);
    //return listing
    res.send(art);
}


//create new listing
exports.create = async (req, res) => {
    //obtain data from form
    const {id, title, price, year, tag, colection, description, rating} = req.body;
    //read file 
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse json
    const data = JSON.parse(datajson);
    //add new listing to the list
    data.art.push(req.body);
    //create a new file with the new listing
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return
    return res.status(201).send(req.body);
}

//update listing
exports.update = async (req, res) => {
    //get the listing by id
    const {id, title, price, year, tag, colection, description} = req.body;
    //read file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse json
    const data = JSON.parse(datajson);
    //search the listing with the id
    const art = data.art.find(art => art.id == id);
    //update listing information
    art.title = title;
    art.price = price;
    art.year = year;
    art.tag = tag;
    art.colection = colection;
    art.description = description;
    //create a new file with the new data
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return
    return res.send({id, title, price, year, tag, colection, description});
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
    const artIndex  = data.art.findIndex(art => art.id == id);
    //verify that the listing was found
    if (artIndex !== -1) {
        //remove the listing
        const deleteListing = data.art.splice(artIndex, 1)[0];
        //create a new file with the new data
        fs.writeFileSync('data/local/data.json', JSON.stringify(data));
        //return
        return res.status(200).send(deleteListing);
    } else {
        //if not found, return error
        return res.status(404).send("Art work not found");
    }
}

