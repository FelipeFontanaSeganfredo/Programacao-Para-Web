const { rejects } = require("assert");
const fs = require(`fs`);

console.log(1);

console.log(2);

function callback (err, contents){
    console.log(err, String(contents));
}

fs.readFile(`./nomes.txt`, (err, contents) => {
    console.log(err, String(contents));
})

console.log(3);

// usando promise

const readFile = file => new Promise ( (resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err);
        } else {
            resolve(contents);
        }
    })
})


readFile(`./nomes.txt`).then(contents => console.log(String(contents))).catch(err => console.log(err));

//async e await

const leitura = async (arquivo) => {
    const contents = await readFile(arquivo);
    console.log(String(contents));
}

leitura(`./nomes.txt`);

console.log(4);

console.log(5);

