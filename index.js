
require('dotenv').config();
const fs = require('fs');
const {Storage} = require('@google-cloud/storage');

const bucketName = process.env.storageBucket;

const PATH = process.env.pathToUpload
const LOCAL_PATH = `${__dirname}/${process.env.localPath}`;
const BASE_URL = `gs://${bucketName}`;
 
const storage = new Storage({
    projectId: process.env.projectId,
    keyFilename: process.env.keyFile,
});

const uploadFile = file => storage.bucket(bucketName).upload(`${LOCAL_PATH}/${file}`, {});
 

setTimeout(() => {
    const promises = [];
    fs.readdirSync(LOCAL_PATH).forEach(file => {
        const index = file.indexOf('.');
        const filename = file.slice(0, index);
        
        promises.push(uploadFile(file));
    }); 

    Promise.all(promises).then((response) => {
        let files = response.map((item) => ({ file: item[0].name, url: `${BASE_URL}/${item[0].name}` }));
        console.log(`You has been uploaded: ${files.length} files`);

        fs.writeFile("filesUploaded.json", JSON.stringify(files), 'utf8', err => {
            if (err) return console.log(err);
            console.log("The file was saved!");
        }); 

    })
}, 2000);

console.log('Starting Module to Upload files... \n \n');
