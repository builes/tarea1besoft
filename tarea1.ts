class Alumno {
    public nombre: string;
    public edad: number;
    public correo: string;
    public promedio: number;
  
    constructor(nombre: string, edad: number, correo: string, promedio: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.correo = correo;
      this.promedio = promedio;
    }
  }
  
  
  const alumnos: Array<Alumno> = [
    { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
    { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
    { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
    { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
    { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
    { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
    { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
    { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
    { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
    { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
    { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
    { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 }, 
  ]  

console.log('\nPunto 1')
// Devuelva una arreglo que contenga todos los estudiantes cuyo promedio es mayor a 6 puntos.
const averageGreaterThanSix = () =>{
    return  alumnos.filter(alumn => {
        return alumn.promedio > 6
    });
}
console.log(averageGreaterThanSix())


console.log('\nPunto 2')
// Devuelva una lista de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.
const averageGreaterThanSixAndAgeGreaterThan19 = () =>{
    return  alumnos.filter(alumn => {
        return alumn.promedio < 6 && alumn.edad > 19
    });
}
console.log(averageGreaterThanSixAndAgeGreaterThan19())


console.log('\nPunto 3')
// Funcion sort
// Si el resultado es negativo, a se ordena antes que b.
// Si el resultado es positivo, b se ordena antes de a.
// Si el resultado es 0, nada cambia.


// Devuelva un arreglo ordenado segun el promedio de forma ascendente.
function ascendingAverage(){
    return alumnos.sort((a, b) => {
        return( a.promedio - b.promedio)
    })
}
console.log(ascendingAverage())


console.log('\nPunto 4')
// El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, devuelva un arreglo que cumpla con esta condición
const increaseNote = () => {
    //Primero se ejecuta el filter dandonos asi los estudiantes con nota <= 4 y luego le suma dos a cada nota
    return alumnos.filter(alumn => alumn.promedio <= 4).map(alumn => {
        return {
            ...alumn,
            promedio: alumn.promedio + 2
        }
    })
}
console.log(increaseNote())


console.log('\nPunto 5')
// Devuelva el promedio general de todos los alumnos
const average = () => {
    let sumTotalNotes = 0
    alumnos.forEach(alumn => {
        const {promedio} = alumn
        sumTotalNotes += promedio
    })

    return sumTotalNotes / alumnos.length
}


console.log(average())




//Los metodos map(), filter() y reduce() no mutan el array original
//El metodo sort() muta el array original