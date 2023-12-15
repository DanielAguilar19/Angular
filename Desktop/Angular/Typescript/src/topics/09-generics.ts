//La fucnion recibe argunmento de tipo "T" es un tipo de dato que nosotros vamos a asignar 
export function whatsMyType<T>( argument: T ): T {

    return argument;
}
//Definimos varios objetos con la funcion quedeclaramos y en lugar de t nosotros le pasamos el tipo de dato
const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray  = whatsMyType<number[]>([1,2,3,4,5]);
//Se manda por consola cada uno de los objetos y se ve que al especificar que tipo de dato retorna 
//Nos deja usar las funciones que trae cada tipo de dato
console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );