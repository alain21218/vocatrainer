const names = [
    "concepts-es5",
    "concepts-es6",
    "concepts-ts",
    "concepts-modules",
    "concepts-modules/cjs",
    "concepts-modules/es6",
    "web-component",
    "workflow-npm"
];

const { mkdirSync, writeFileSync } = require("fs");

//Permet de ne pas perdre le scope du THIS
const createDir = name => {
    console.log(name);
    mkdirSync(name);
    return name;
}

const createIndex = name => {
    writeFileSync(name + '/index.js', '');
    return name;
}

//Passer chaque élément du tableau par une fonction
names.map(createDir).map(createIndex); 
