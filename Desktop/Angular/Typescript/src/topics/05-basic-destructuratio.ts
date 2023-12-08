interface audioPlayer{
    audioVolume:number;
    song:string;
    songDuration:number;
    details:Details;
    
}
interface Details{
    author:string;
    year:number;
}

const AudioPlayer:audioPlayer = {
    audioVolume: 90,
    song: "Un coco",
    songDuration: 36,
    details: {
        author: "Bad Bunny",
        year: 2015
    },
}
//Desestructuracion de las propiedades de audio player
const {song, songDuration, details} = AudioPlayer;
//para objetos añidados se puede desestructurar dentro de la misma desestructuracion usando details:{author}
const {author} = details;
//o tambien y se recomienda hacerlo asi desestructurando por partes


//console.log("Cancion ",song, "Duracion " ,songDuration, "Artista ",author);


//DESESTRUCTURACION DE ARREGLOS
//si al arreglo lo ponemos como nombre HEROES podriamos hacerla desestructuracion de la siguiente manera:

const heroes:string[]=['Flash', 'Superman', 'Batman'];

const p3= heroes[2] || 'No hay personaje';//se delcara una constante con la posicion del atributo que queremos

console.log("Heroe 3: ", p3);

//Para DESESTRUCTURAR un arreglo se puede utilizar esta tecnica tambien:
const [v1,v2,v3]:string[]=['Joker','Lex Luthor', 'Reverse Flash'];
//Si yo quisiera ver en consola al joker se haria llamando las variables que se declararon luego del CONST  
//ESTAS SE PUEDEN OBVIAR PERO SIEMPRE DEBEN ESTAR LAS COMAS, es decir
//const [v1, , ]
console.log("Villano 1: ",v1);

