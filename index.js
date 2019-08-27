const ttn = require('ttn');
var mongodb  = require('mongodb');
var config   = require('./config');

const appID = config.ttn.appID;
const accessKey = config.ttn.accessKey;

var mongoUri = 'mongodb://' + config.mongodb.hostname + ':' + config.mongodb.port;

mongodb.MongoClient.connect(mongoUri, { useNewUrlParser: true }, function(error, database) {

    if(error != null) {
        throw error;
    }

    ttn.data(appID, accessKey)
    .then(function (client) {
        client.on("uplink", function (devID, payload) {
            // console.log("Received uplink from ", devID)
            // console.log(payload)

            var messageObject = {
                devID: devID,
                payload: payload,
                date: new Date().toLocaleString()
            };
            
            db = database.db(config.mongodb.database);
    
            db.collection(config.mongodb.collection).insertOne(messageObject, function(error, result) {
                if(error != null) {
                    console.log("ERROR: " + error);
                }
            });

        })
    })
    .catch(function (error) {
        console.error("Error", error)
        process.exit(1)
    });
});


