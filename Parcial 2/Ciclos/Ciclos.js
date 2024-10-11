for(let a=1; a<10; a++){
console.log("Numero: "+ a);
}

let a 

let objeto ={
    nombre:"Hugo",
    Apellido:"Rangel",
    Edad:"19"
};

for(let Propiedad in objeto){
    console.log(objeto[Propiedad]);
}




for(let Numero in array){
    console.log(array[Numero]);
}

let array=[1,2,3,4,5]
array.forEach(
    function(element){
        console.log(element);
    }
)

let string ="Curso de grafos";

for(let Palabra in string){
    console.log(string[Palabra]);
}



var saludar = function(nombre){
    return 'Hola', $(nombre);
}

let nombre="carlos";
saludar(nombre);

