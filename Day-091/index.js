// You have to create a Node.js program to clear the clutter inside a directory and organise the contenets of the directory into different folders:
//For eg, these files becomes : 
// 1. name.jgp
// 2. name.png
// 3. this.pdf
// 4. rohan.zip
// 5. harry.zip
// 6. cat.jpg
// 7. rohan.pdf

// this: 
// 1. jpg/name.jpg, jpg/cat.jpg
// 2. png/name.png
// 3. pdf/this.pdf, pdf/rohan.pdf
// 4. zip/rohan.zip, zip/harry.zip

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "//Volumes//Rey//Code PlayGround//Learning-FullStack-WebDev//Day-91(Ex)//";

let files = await fs.readdir(basepath);

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1];
    if(ext != "js" && ext != "json" && item.split(".").length > 1){
    if(!fsn.existsSync(ext)){
        fs.mkdir(ext);
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item));

    }
    else{
         //move the file to this directory
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item));
    }
}
}