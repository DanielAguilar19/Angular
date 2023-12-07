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
console.log("Cancion ",song, "Duracion " ,songDuration, "Artista ",author);
