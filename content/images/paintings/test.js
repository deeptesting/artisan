const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'miscellaneous');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// // Loop through each file that was retrieved
// files.forEach(file => rename(
//   imageDirPath + `/${file}`,
//   imageDirPath + `/${file.replace(' (','').replace(')','')}`,
//   err => console.log(err)
// ));

for(i=1;i<=47;i++){
  var data =`{
    "Img_name":"pic${i}.jpg",
    "Img_description":""
    },`;
  console.log(data);
}