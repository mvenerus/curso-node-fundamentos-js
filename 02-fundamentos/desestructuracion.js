const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder:  'Regeneracion',
  edad: 50,
  getNombre() {
      return `${this.nombre}, ${this.apellido}: ${this.poder}`
  }  
};

//console.log(deadpool.getNombre());

const {nombre, apellido, poder, edad = 0} = deadpool;

imprimirHeroe = ({nombre, apellido, poder, edad = 0}) => {
    console.log(nombre, apellido, poder, edad);
}

imprimirHeroe(deadpool);

const heroes = ['Superman', 'Batman', 'Mujer Maravilla'];

const [ , , h3 ] = heroes;

console.log(h3);

//console.log(nombre, apellido, poder, edad);