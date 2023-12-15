//Para que sea considerado Decorador tiene que recibir como parametro un constructor

function classDecorator <T extends {new(...args:any[]):{}}>( constructor:T) {//Se le agrega un tipo de datos generico para evitar errores
    return class extends constructor{
        newProperty='New Property';
        hello='Override';
    }
}

//El decorador deja la clase tal y como esta pero le agrega funciones extras
@classDecorator
export class SuperClass {


    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo')
    }
}

//Se impirme la definicion de la clase
console.log( SuperClass );


//Instancia creada de la clase anteriormente creada
const myClass = new SuperClass();
console.log( myClass );