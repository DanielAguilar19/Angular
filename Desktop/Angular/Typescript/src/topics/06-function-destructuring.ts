//Interfaz que define los productos en venta
interface product{
    description:string;
    price:number;
}

//secrearon dos objetos uno de tablet y otro para celular
const phone:product={
    description: "Samsung S23",
    price: 500.0
}
const tablet:product={
    description: "iPad Air",
    price: 600.0
}
//destrcturacion para interface product
const {description:descripcionCelular,price:precioCelular}=phone;
const {description:descripcionTabblet,price:precioTablet}=tablet;

interface taxCalculationOptions{
    tax:number;
    products: product[];
}

function taxCalculation(options:taxCalculationOptions):[number,number]{
    const {products,tax}=options;//Desestructuracion de options
    let total=0;
//se hace suma de todos los precios de los productos en la variable total
    products.forEach( ({price})=>{//({price}) permite sacar solo el precio del producto desestructurizando 
        total += price
    })
//se retorna el total y tambieml el total por el tax
    return[total, total*tax]
}

//Onjeto donde se almacenan los productos a comprar
const shoopingCart=[phone,tablet];

//se utiliza esta constante para calcular el impuesto sobre la venta
const tax=0.15;

const [total, taxResult] = taxCalculation({
    products:shoopingCart,
    tax:tax
})

console.log("Total ",total);
console.log("Tax ",taxResult);
