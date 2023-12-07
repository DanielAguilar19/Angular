/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    name:string;
    age:Number;
    address:Address;//Para el arreglo se puede definir de esta manera usando una interface (RECOMENDADO)
    /** O tambien se puede definir de esta manera
     * address:{
        street:string,
        country:string,
        city:string
     * }
     * 
     */
    showAddress: () => string;
}
interface Address{
    street:string,
    country:string,
    city:string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};