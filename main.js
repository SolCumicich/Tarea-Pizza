const PIZZA = [
    'Harina',
    'Agua',
    'Levadura',
    'Aceite',
    'Salsa de tomate',
    'Cebolla',
    'Oregano',
    'Muzzarella',
    'Rodajas de tomate',
    'Ajo'
];

const parImpar = (array)=>{
    const pares = [];
    const impares = [];

    for(let i=0;i<PIZZA.length;i++){
        if(PIZZA[i].length % 2 === 0){
            pares.push(PIZZA[i]);
        }else{
            impares.push(PIZZA[i]);
        }
    }
    return [pares, impares];
}
const [pares,impares]= parImpar(PIZZA);

console.log (`Los ingredientes pares son: ${pares}`,`Los ingredientes impares son: ${impares}`);