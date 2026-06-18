let equipos = [];

function crearEquipo(nombre, entrenador) {
  let nuevo = {
    id: Date.now(),
    nombre: nombre,
    entrenador: entrenador,
    jugadores: [],
    victorias: 0,
    derrotas: 0,
    puntos: 0,
  };

  equipos.push(nuevo);
}
