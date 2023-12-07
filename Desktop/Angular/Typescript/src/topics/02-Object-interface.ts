
//?let skills = ['Bash','Counter','Helaing',true,123]; TS Cambia el tipo del arreglo
//?let skills: string[] = ['Bash','Counter','Helaing'];//Se Asigna tipo para que solo reciba STRING

interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometown?:string;//'?' significa que el campo es opcional
}


const batman:Character={
    name:'Bruce Wayne',
    hp:100,
    skills:['Batarang','BatiPunch','Grapler'],
};


batman.hometown='Gotham';

console.table(batman);


export{};