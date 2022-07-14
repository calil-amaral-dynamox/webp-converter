const webp = require('webp-converter');
const path = require('path');
const fs = require('fs');

// this will grant 755 permission to webp executables
webp.grant_permission();

const inputImagePath = path.join(__dirname, '/images/input/');
const outputImagePath = path.join(__dirname, '/images/output/');

//passsing directoryPath and callback function
fs.readdir(inputImagePath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
        const fileName = file.split('.')[0]
        const result = webp.cwebp(`${inputImagePath}/${file}`,`${outputImagePath}/${fileName}.webp`,"-q 80",logging="-v");
        result.then((response) => {
            console.log(response);
        }); 
    });
});

