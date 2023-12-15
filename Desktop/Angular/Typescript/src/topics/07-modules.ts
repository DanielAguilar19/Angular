//A la hora de importar modulos nos tenemos que asegurar que no hayan consolo.log() ya que estos se ejuctarian
import { product, taxCalculation } from './06-function-destructuring';


const shoppingCart:product[]=[
    {
        description:"Samsung s22+",
        price:202
    },
    
    {
        description:"Dell",
        price:500
    },
];

const [total, tax]= taxCalculation({
    products:shoppingCart,
    tax:0.15,

})
console.log("El total es: ",total);
console.log("El impuesto es: ",tax);


