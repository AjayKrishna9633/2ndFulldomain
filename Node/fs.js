import fs from 'fs';

const readstream = fs.createReadStream("out.txt",{encoding:"utf-8"});
const writeStream = fs.createWriteStream("pipe.txt");

readstream.pipe(writeStream)