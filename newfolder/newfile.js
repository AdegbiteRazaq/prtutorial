const fs=require('fs')

// fs.writeFileSync("helo.txt","hello kaffy")
// fs.writeFileSync("temp.js","")
// fs.mkdirSync("testfolder")
//fs.mkdirSync("./newfolder/newtestfolder")
//  fs.writeFileSync("./newfolder/newtestfolder/latestfile.txt","hello guyss")
 
 fs.readFile('helo.txt','utf8', (err, data) => {

    if (err) throw err;
    console.log(data);
  });
// console.log("hello")

//  const data = fs.readFileSync('helo.txt');
// console.log(data.toString());
// console.log("hello")
