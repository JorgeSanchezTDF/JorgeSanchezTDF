let nombre: string | null = prompt("Ingrese el nombre del alumno");
let notaPractica: number = Number(
  prompt("Ingrese la nota de la parte práctica")
);
let notaProblemas: number = Number(
  prompt("Ingrese la nota de la parte de problemas")
);
let notaTeoria: number = Number(prompt("Ingrese la nota de la parte teórica"));
let notaFinal: number = 0;

while (nombre !== "") {
  if (
    notaPractica >= 0 &&
    notaPractica <= 10 &&
    notaProblemas >= 0 &&
    notaProblemas <= 10 &&
    notaTeoria >= 0 &&
    notaTeoria <= 10
  ) {
    notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeoria * 0.4;
    console.log(
      "El alumno " + nombre + " tiene una nota final de: " + notaFinal
    );
  } else {
    console.log("Error, las notas deben estar entre 0 y 10");
  }
  nombre = prompt("Ingrese el nombre del alumno");
  notaPractica = Number(prompt("Ingrese la nota de la parte práctica"));
  notaProblemas = Number(prompt("Ingrese la nota de la parte de problemas"));
  notaTeoria = Number(prompt("Ingrese la nota de la parte teórica"));
}
