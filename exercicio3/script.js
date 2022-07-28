const num = [32, 24, 96, 105];
const objeto = ['cateira','controle','caneta','esqueiro'];
const misto = [312, 'flamengo', true];

console.log(num);
console.log(objeto);
console.log(misto);

//execicio 2, parte 1.
console.log('Quantidade de itens Num =', num.length);
console.log('Quantidade de itens Objeto =', objeto.length);
console.log('Quantidade de itens Misto =', misto.length);

//execicio 2, parte 2.
console.log("Primeiro item de Num =", num[1]);
console.log('Segundo item de Objetos =', objeto[2]);

//exercicio 2, parte 3
console.log(num.includes(96))
console.log(misto.includes("café"))

//exercicio 3, parte 1
const numCopia = num.slice()
console.log("num Copia", numCopia)

const objetoCopia = objeto.slice()
console.log('ojeto Copia', objetoCopia)

const mistoCopia = misto.slice()
console.log('misto Copia', mistoCopia)

//exercicio 3, parte 2
numCopia.push(55)
console.log('num Original', num)
console.log('num copia', numCopia)

//exercicio 3, parte 3
objetoCopia.pop()
console.log('objeto Original', objeto)
console.log('obejto copia', objetoCopia)

//exercicio 3, parte 4
mistoCopia.splice(1,1)
console.log('misto Original', misto)
console.log('misto copia', mistoCopia)
