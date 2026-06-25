//Generador de IDs
export function generarIdUnico() {
  let id;
  do {
    id = Math.floor(10000 + Math.random() * 90000);
  } while (
    jugadores.some((j) => j.id === id) ||
    equipos.some((e) => e.id === id)
  );

  return id;
}

//Registro de Jugador
let jugadores = [];

function registrarJugador(nombre, nickname, nivel, equipo) {
  let nuevo = {
    id: generarIdUnico(),
    nombre: nombre,
    nickname: nickname,
    nivel: nivel,
    victorias: 0,
    derrotas: 0,
    puntaje: 0,
    equipo: null,
  };

  jugadores.push(nuevo);
}

function editarJugador() {}

function eliminarJugador() {}
