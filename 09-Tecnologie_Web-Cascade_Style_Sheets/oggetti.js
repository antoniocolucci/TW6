function Persona (nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
    this.anno = setAnnoDiNascita();
}

function setAnnoDiNascita (a) {
    this.anno = a;
}

let persona = new Persona()
persona.nome = "Antonio"
persona.cognome = "Colucci"
persona.anno = 1998

console.log(persona)

let persona2 = {nome: "Luca", cognome: "Rossi"}
console.log(persona2)

let d = new Date()
console.log(d) //mostra l'ora.

let myArray = new Array()
myArray[0] = "Emanuele"
myArray[1] = "Guido"
myArray[2] = "Antonio"
myArray[3] = 1998
myArray.sort()
myArray.push("Ciao")
myArray.pop()
console.log(myArray)

let len = myArray.length
console.log(len)

let x = "Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura,ché la diritta via era smarrita."
let occ = x.match("vita");
console.log(occ)