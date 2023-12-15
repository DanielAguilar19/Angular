//Interfaz que define un pasajero
export interface Passenger {
    name: string;
    children?: string[];//SI tiene hijos es parametro opcional
}
//Primera instacia del tipo de objeto passanger
const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
}
//Funcion que retorna el numero de hijos que tiene el pasajero
const returnChildrenNumber = ( passenger: Passenger, ): number => {

    const howManyChildren = passenger.children?.length || 0;//si children[] es undefined devuelve 0
    // const howManyChildren = passenger.children!.length;

    //Retorna nombre y el numero de hijos que tiene el pasajero
    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}


returnChildrenNumber( passenger1 );
returnChildrenNumber( passenger2 );