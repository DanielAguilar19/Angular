
//FUNCION COMUN
function addNumbers(a:number, b:number):number {
    return a+b;
}
//FUNCION DE TIPO FLECHA
const substractNumbers = (a:number, b:number):string =>  {
    return `${a - b}`; //los `` permiten el retorno de la suma de valores que son tipo number a un string 
    //permite hacer inyeccion de una expresion de js dentro de templates
}

//Se declara la funcion con el primer parametro obligatorio, el segundo opcional y el tercero constante
function Multiply(firstNumber:number, secondNumber?:number, base:number=2):number {
    return firstNumber*base
}

/*
//Llamado de Funciones
const result1=addNumbers(5,2);
const result2=substractNumbers(5,2);
const result3=Multiply(5);

//Muestra los resultados en la consola
console.log(result1, result2, result3);
*/


//Interfaz que nos describe como se mira el objeto Character y sus diferentes propiedades
interface Character{
    name:string;
    hp:number;
    showHp: ()=> void;//Funcion declarada dentro del objeto, muestra los puntos de vida

}
//Funcion que sirve para curar por puntos de vida a un Character
const healCharacter= (Character:Character, healAmount:number)=>{
    Character.hp+=healAmount;
}
//Definicion de un Character
const batman:Character={
    name:'Batman',
    hp:50,
    showHp() {
        console.log(`Personaje: ${this.name} || Puntos de vida: ${this.hp}`);//Se hace uso de los js Templates
    },
}
//Al llamar esta funcion nuestro personaje se curara 50 puntos de vida
healCharacter(batman,50);

//Solo con llamar al objeto y su metodo mostraria sus puntos de vida
batman.showHp();