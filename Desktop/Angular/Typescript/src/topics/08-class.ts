//La clase persona es un molde de persona sus atributos y propiedades se difinen dentro de la clase que se exporta
export class Person{

// public name:string;
// public address:string;

//Los accesos se pueden definir dentrod de la misma clase constructor
    constructor(public name:string, public address:string='No Address'){  
    }
}

//La clase Hero hereda metodos y atributos de la clase Person
export class Hero{
//Se define un atributo peron de tipo person y se inicializa en el constructor
    //public person:Person;

    constructor(
        public alterEgo:String,
        public age:number,
        public realName:string,
        public person: Person //Tambien se puede definir de esta manera dentro de los parametros esperados
    ){
 //       this.person= new Person(realName,"Gotham City");
    }
}
//Se inicializa un objeto de tipo person:
const person=new Person("Bruce Wayne", "Gotham City");

//Iniciacion del objeto batman de tipo persona
const batman = new Hero('Batman', 40 ,'Bruce Wayne',person);
//Mostrara el objeto en consola
console.log(batman);
