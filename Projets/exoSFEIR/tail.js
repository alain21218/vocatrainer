//Libs pour lire les fichers textes
const fs = require('fs');

//On lit les paramètres
const args = process.argv.slice(2);
const path = args[0];
const size = args[1];

//On lit le fichier
fs.readFile(path, 'utf8', (err, data) => {  
    //Eventuelles erreurs
    if (err) throw err;

    //On découpe selon les retours à la ligne
    const split = data.split("\n");

    //On prend les lignes qui nous intéressent
    const slice = split.slice(split.length - size, split.length);

    //On joint le résultat
    const result = slice.join('\n');
    
    console.log(result);
});
