// CALSE DEL 26 DE OCTUBRE
//          POO

// 4 principios basicos de poo

// Abstraccion: mapear o representar la realidad mediante codigo

// Encapsulamiento: es la forma en la que definimos el alcance de un elemnto

// Herencia: los elementos pueden reutilizar los atributos de otras clases de forma jerarquica

// Polimorfismo: es la capacidad de un objeto de comportarse de diferentes formas

// la principal diferencia entre interfaz y clase abstracta es que la interfaz no puede 
// tener metodos o atributos con implementacion, es decir, en una interaz todo estar;a en blanco.


class nombre_de_clase{
    //atributos
    //metodos
}
class Animal {

    constructor(nombre, edad, tipo, soundtoEmit){
        this._nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
        this.soundtoEmit = soundtoEmit;
    }
    soundtoEmit(){
        return this.soundtoEmit;
    }
    comer(){
        console.log(`${this.nombre} esta comiendo`);
    }
    #dormir(){
        console.log(`${this.nombre} esta durmiendo`);
    }
    sonar(){
        console.log(`${this.nombre} esta haciendo sonidos`);
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    static isAnimal(obj){
        return obj instanceof Animal;
    }

}

let a = new Animal("perro a", 5, "mamifero");
let b = new Animal("gato b", 3, "mamifero");

console.log(a);
console.log(a._nombre);

//para ejecturalo en consola:
//node poo.js

class Dog extends Animal{
    constructor(nombre, edad, tipo, raza, soundtoEmit){
        super(nombre, edad, tipo, soundtoEmit);
        this.raza = raza;
    }
    sonar(){
        console.log(`${this.nombre} esta ladrando`);
    }
    ladrar(){
        console.log(`${this.nombre} esta ladrando`);
    }
}



class Cat extends Animal{
    constructor(nombre, edad, tipo, raza, soundtoEmit){
        super(nombre, edad, tipo, soundtoEmit);
        this.raza = raza;
    }
    sonar(){
        console.log(`${this.nombre} esta maullando`);
    }
    maullar(){
        console.log(`${this.nombre} esta maullando`);
    }
}

let c = new Cat("gato c", 3, "mamifero", "siames");

let d = new Dog("perro d", 5, "mamifero", "labrador", ()=>{
    console.log("guau");});

let e = new Cat("perro e", 5, "mamifero", "labrador", ()=>{
    console.log("miauu");});

let animals = [a,b,c,d,e];

animals.forEach((animal)=>{
    animal.soundtoEmit();
});

animals.forEach(animal=>animal.soundtoEmit());

//para ejecturalo en consola:
//node poo.js

//un metodo de instancia es un metodo que se puede ejecutar desde una instancia de la clase
// mientras que un metodo de clase se puede ejecutar desde la clase misma

//concatenacion
console.log("El objeto es un animal??  " + Animal.isAnimal(a));

//interpolacion
console.log(`El ${a.getNombre()} es un animal??  ${Animal.isAnimal(a)}`);

//