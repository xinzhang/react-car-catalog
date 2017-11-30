const fs = require('fs');
const path = require('path');


function readJSONFile(filename, callback) {
    let jsonFilePath = path.resolve(__dirname, `../json/${filename}`);    
    fs.readFile(jsonFilePath, function (err, data) {
      if(err) {
        callback(err);
        return;
      }
      try {
        callback(null, JSON.parse(data));
      } catch(exception) {
        callback(exception);
      }
    });
  }

//Pormisify for API
function getCarOfWeek() {
    return new Promise( function(resolve, reject) {        
        readJSONFile("carOfTheWeek.json", function(err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function getAllMakers() {
    return new Promise( function(resolve, reject) {        
        readJSONFile("makes.json", function(err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function getAllModels() {
    return new Promise( function(resolve, reject) {        
        readJSONFile("models.json", function(err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function getModelsByMakerId(makeId) {
    return new Promise( function(resolve, reject) {        
       getAllModels().then(values => {
            const models = values.filter(x=>x.makeId === makeId);
            resolve(models);
        }).catch(err => reject(err));
    });    
}

function getCarByModelId(modelId) {
    return new Promise( function(resolve, reject) {        
        getAllModels().then(values => {
             const models = values.find(x=>x.id === modelId);
             resolve(models);
         }).catch(err => reject(err));
     }); 
}

//not used: in case later search model by maker names
function getModelsByMaker(makerName) {
    return new Promise( function(resolve, reject) {

        Promise.all([
                getAllMakers(), 
                getAllModels()
        ]).then( values => {
            const maker = values[0].find(x=> x.name === makerName);
            if (maker) {
                const models = values[1].filter( y => y.makeId ==  maker.id);
                resolve(models);
            } else {
                throw (`no maker ${makerName} found`);
            }
        }).catch(err => {
            reject(err);
        });
    });    
}

module.exports = {
    getCarOfWeek,
    getAllMakers,
    getModelsByMakerId,
    getCarByModelId
}
