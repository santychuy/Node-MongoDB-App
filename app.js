const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
//Es la direccion para crear una base de datos, al final se le pone el nombre de la db
//const url = "mongodb://localhost:27017/nodeJSExample";

//Para crear una base de datos
mongoClient.connect(url, (error, db) => {
    if (error) throw error;
    console.log('DB created!');
    db.close();
});

//Crear una coleccion
mongoClient.connect(url, (error, db) => {
    if (error) throw error;

    const dbExample = db.db("nodeJSExample");
    dbExample.createCollection("clients", (error, res) => {
        if (error) throw error;

        console.log(`Collection ${res.collectionName} created!`);
        db.close();
    });
});


//Para meter datos
mongoClient.connect(url, (error, db) => {
    if (error) throw error;

    const dbName = db.db("nodeJSExample");
    const myObj =  [{name: 'Santiago', age: 21},
                    {name: 'Jesus', age: 22},
                    {name: 'Santy', age: 18},
                    {name: 'Chuy', age: 16},
                    {name: 'Sebastian', age: 16},];

    dbName.collection("clients").insertMany(myObj, (error, res) => {
        if (error) throw error;

        console.log('Docs inserted!');
        db.close();
    });
});
